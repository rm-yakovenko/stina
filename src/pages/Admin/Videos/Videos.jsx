import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import useVideos, {
  getVideos,
  addVideo,
  deleteVideo,
} from 'components/useVideos';
import { RoundIconButton } from 'components/Buttons';
import { getVideoPreviewImg } from 'helpers/videoHelpers';
import { VideoImage } from 'pages/MainPage/style';
import AddVideoForm from './Form';
import {
  VideosContainer,
  VideoContainer,
  VideoGrid,
  DeleteButtonContainer,
} from './style';

function Videos() {
  const [{ videos }, dispatch] = useVideos();

  const handleAddVideo = async (body) => {
    await addVideo(dispatch, body);
  };

  const handleDelete = (id) => {
    deleteVideo(dispatch, id);
  };

  useEffect(() => {
    getVideos(dispatch);
  }, []);

  return (
    <VideosContainer>
      <AddVideoForm addVideo={handleAddVideo} />
      <VideoGrid>
        {videos.map((video) => (
          <VideoContainer key={video.id}>
            <VideoImage src={getVideoPreviewImg(video.url)} />
            <DeleteButtonContainer>
              <RoundIconButton
                type="button"
                onClick={() => handleDelete(video.id)}
              >
                <DeleteIcon />
              </RoundIconButton>
            </DeleteButtonContainer>
          </VideoContainer>
        ))}
      </VideoGrid>
    </VideosContainer>
  );
}

export default Videos;
