import {Box,styled} from '@mui/material/';
import {themeShadows} from '../../theme/shadows'
import {opacityColors} from '../../theme/opacityColors'

export const SearchBar = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.background.default,
  padding:"1.5em",
  maxWidth:"80%",
  borderRadius: theme.shape.borderRadius,
  boxShadow:themeShadows().info,
  margin:'0px auto',
}));