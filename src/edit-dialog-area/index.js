import React, {useContext} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DispatchContext from '../dispatchContext';
import { CLOSE_EDIT_DIALOG } from '../actions/actionTypes';

function EditDialogArea({open, blockData}) {
  const dispatch = useContext(DispatchContext);
  function handleClose(){
    dispatch({type:CLOSE_EDIT_DIALOG});
  }
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <h2>123</h2>
      {blockData&&<div>
        <h1>123 {blockData.name}</h1>
      </div>}
    </Dialog>
  );
}

export default EditDialogArea;