export interface ButtonProps {
  variant: string;
  size: string;
  color: string;
  onClick: () => void;
};

export interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
};
