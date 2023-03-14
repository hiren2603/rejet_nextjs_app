import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { ReactNode } from 'react';

interface Props {
  buttonText: string,
  buttonIcon?: ReactNode,
  customClass?: React.CSSProperties
}

const CustomButton = ({buttonText, buttonIcon, customClass}: Props) => {
  return (
    <Button variant="outlined" startIcon={buttonIcon} sx={customClass}>
      {buttonText}
    </Button>
  )
}

export default CustomButton