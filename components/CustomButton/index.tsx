import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { ReactNode } from 'react';

interface Props {
  buttonText: string,
  buttonIcon?: ReactNode,
  customClass?: React.CSSProperties,
  color: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning",
  variant: "text" | "outlined" | "contained"
}

const CustomButton = ({ buttonText, variant, buttonIcon, customClass, color = "primary" }: Props) => {
  return (
    <Button variant={variant} color={color} startIcon={buttonIcon} sx={customClass}>
      {buttonText}
    </Button>
  )
}

export default CustomButton