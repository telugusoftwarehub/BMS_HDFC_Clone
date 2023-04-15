import { Container,Paper, InputBase, IconButton, styled} from '@mui/material';

export const RootContainer = styled(Container)`
  min-height: 49px;
  padding:10px 0 10px 0;
  

`
export const NavContainer = styled(Container)`
    max-width:960px !important;
    display: flex;
    justify-content: space-between;

    
`

export const PaperContainer = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 617px;
  height: 36px;
  border: 1px solid #dedede;
  `
export const IBase = styled(InputBase)`
  flex: 1;
  margin-left: 8px;
`
export const IButton = styled(IconButton)`
  padding: 10px;
`
