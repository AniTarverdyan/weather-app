import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import { Slide } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../../redux/main/popupSlice';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = () => {

  const messages: string = useSelector((state: any) => state.message.message)
  const openPopup = useSelector((state: any) => state.openPopup.openPopup)
  const dispatch = useDispatch()

  return (
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth='xs'
        open={openPopup}
        onClose={() => dispatch(closePopup())}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Error"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText >
            {messages}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(closePopup()) }>Close</Button>
        </DialogActions>
      </Dialog>
  );
}
export default AlertDialog;