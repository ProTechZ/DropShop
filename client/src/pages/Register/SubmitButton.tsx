import Button from '@mui/material/Button';

interface SubmitButtonProps {
  formHandler: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ formHandler }) => (
  <Button
    variant="contained"
    color="secondary"
    sx={{ fontSize: 17.5 }}
    type="submit"
    onClick={(event) => {
      event.preventDefault();
      formHandler();
    }}
  >
    Register
  </Button>
);

export default SubmitButton;
