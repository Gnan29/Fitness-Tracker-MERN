import React from 'react';
import '../popup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineClose } from 'react-icons/ai';

interface AdminPopupProps {
  setShowAdminPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminPopup: React.FC<AdminPopupProps> = ({ setShowAdminPopup }) => {
  return (
    <div className='popupout'>
      <div className='popupbox'>
        <button className='close' onClick={() => setShowAdminPopup(false)}>
          <AiOutlineClose />
        </button>
        
        <h2>Admin Panel</h2>
        <TextField label="User ID" variant="outlined" color="warning" />
        <TextField label="Role" variant="outlined" color="warning" />
        <Button variant="contained" color="warning">Save</Button>
      </div>
    </div>
  );
};

export default AdminPopup;
