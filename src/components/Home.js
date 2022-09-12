import React from 'react';
import { PLACES } from '../shared/places';
import './media.css';
import Menu from './menu';
import FaceIcon from '@mui/icons-material/Face';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { getLocalStorage , clearLocalStorage} from '../storage/storage';
import { useNavigate } from 'react-router-dom';
const Home=()=>{
  const user = getLocalStorage('User')
  const navigate = useNavigate()

 const onLogout=()=> {
  clearLocalStorage()
  
  // window.history.replaceState(null, null, '/');
  navigate('/login',{ replace: true })
  }

  const submit = () => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to LogOut ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => onLogout()
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  return(
    <>

<div className='App'>
<div>
<h1>Famous Places of India</h1>  
{user && <FaceIcon
  style = {{fontSize: 50, position: 'absolute', right : 0, top: 0}}
  onClick = {()=>submit()}
   />}

</div>
<Menu places={PLACES} />
</div>
</>
  )
} 

export default Home

