import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RoundIconButtonInverted } from 'components/Buttons';
import MenuItem from '@material-ui/core/MenuItem';
import { userSignOut } from 'firebase';
import { StyledMenu } from './style';

function AdminButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGotoAdminPage = () => {
    handleClose();
    history.push('/admin');
  };

  const handleSignOut = async () => {
    await userSignOut();
    handleClose();
    history.push('/login');
  };

  return (
    <>
      <RoundIconButtonInverted onClick={handleClick}>A</RoundIconButtonInverted>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleGotoAdminPage}>Admin</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </StyledMenu>
    </>
  );
}

export default AdminButton;
