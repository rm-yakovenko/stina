import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlaceCard from 'components/PlaceCard';
import { useCategoriesMap } from 'pages/MainPage/categoriesMap';
import {
  getPlaces,
  addPlace,
  deletePlace,
  editPlace,
  usePlacesDispatch,
} from 'components/usePlaces';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Collapse from '@material-ui/core/Collapse';
import { RoundIconButton } from 'components/Buttons';
import { HeadingH6, HeadingH5 } from 'components/Typography';
import Box from '@material-ui/core/Box';
import AddPlaceForm from './Form';
import EditPopUp from './EditPopUp';
import { PlacesContainer } from '../style';
import {
  PreviewContainer,
  CategoriesContainer,
  CategoryContainer,
  PlacesArea,
  PlaceHeader,
  StyledDownIcon,
} from './style';

function Places() {
  const categoriesMap = useCategoriesMap();
  const placesDispatch = usePlacesDispatch();
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const [previewValues, setPreviewValues] = useState();
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const { t } = useTranslation();

  const handleAddPlace = async (values) => {
    const placeRoute = `places/${values.category.value}/places`;
    const body = {
      ...values,
      lat: Number(values.lat),
      long: Number(values.long),
      category: values.category.value,
    };
    await addPlace(placesDispatch, placeRoute, body);
  };

  const handleDeletePlace = async (place) => {
    const placeRoute = `places/${place.category}/places`;
    await deletePlace(placesDispatch, placeRoute, place);
  };

  const toggleEditePopup = () => {
    setEditFormOpen(!isEditFormOpen);
  };

  const handleEditPlace = async (place) => {
    const placeRoute = `places/${place.category}/places`;
    await editPlace(placesDispatch, placeRoute, place);
    toggleEditePopup();
  };

  const handleShowPreview = (values) => {
    const previewVal = {
      ...values,
      name: t(values.name),
    };
    setPreviewValues(previewVal);
    setPreviewVisible(true);
  };

  const handleOpenCategory = (category) => {
    if (currentCategory === category) {
      setCurrentCategory(null);
      return;
    }
    setCurrentCategory(category);
  };

  useEffect(() => {
    getPlaces(placesDispatch);
  }, []);

  return (
    <PlacesContainer>
      <Box paddingTop="30px" paddingLeft="10px">
        <HeadingH5>Add places</HeadingH5>
      </Box>
      <Box display="flex" marginTop="20px" width="100%">
        <AddPlaceForm
          categoriesMap={categoriesMap}
          addPlace={handleAddPlace}
          onPreview={handleShowPreview}
        />
        <PreviewContainer>
          {isPreviewVisible && (
            <PlaceCard placeData={previewValues} size="large" />
          )}
        </PreviewContainer>
      </Box>
      <CategoriesContainer>
        {categoriesMap.map((category) => (
          <CategoryContainer key={category.id}>
            <PlaceHeader onClick={() => handleOpenCategory(category.id)}>
              <HeadingH6>{category.name}</HeadingH6>
              <StyledDownIcon selected={category.id === currentCategory} />
            </PlaceHeader>
            <Collapse in={category.id === currentCategory}>
              <PlacesArea>
                {category.places?.map((place) => (
                  <Box marginRight="20px" key={place.id}>
                    <PlaceCard placeData={place} size="medium" />
                    <Box marginTop="10px" display="flex">
                      <Box marginRight="5px">
                        <RoundIconButton
                          type="button"
                          onClick={() => handleDeletePlace(place)}
                        >
                          <DeleteIcon />
                        </RoundIconButton>
                      </Box>
                      <RoundIconButton
                        type="button"
                        onClick={() => {
                          toggleEditePopup();
                          setCurrentPlace(place);
                        }}
                      >
                        <EditIcon />
                      </RoundIconButton>
                    </Box>
                  </Box>
                ))}
              </PlacesArea>
            </Collapse>
          </CategoryContainer>
        ))}
      </CategoriesContainer>
      <EditPopUp
        open={isEditFormOpen}
        onClose={toggleEditePopup}
        categoriesMap={categoriesMap}
        place={currentPlace}
        onEdit={handleEditPlace}
      />
    </PlacesContainer>
  );
}

export default Places;
