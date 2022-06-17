export interface ButtonProps {
  variant: string;
  size: string;
  color: string;
  onClick: () => void;
};

export interface IDialogProps {
  message: string;
  open: boolean;
  setOpen: any
}