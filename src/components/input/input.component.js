import  React from 'react';
import { PaperContainer,IBase,IButton,RootContainer,NavContainer
 } from './input.styles';

import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
// import { Button } from '@mui/material';
import Button from '../button'


export default function CustomizedInputBase(props) {
  return (
<RootContainer maxWidth="xl">
  <NavContainer>
    Welcome!
    <PaperContainer>
      <IButton aria-label="menu">
        <SearchIcon sx={{color:'#e37c73'}}/>
      </IButton>
      <IBase 
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IButton type="button"  aria-label="mic">
        <MicIcon />
      </IButton>
    </PaperContainer>
    <Button buttonVariant="contained" ButtonSize="medium"  buttonText="Login" />
    </NavContainer>
    </RootContainer>
  );
}