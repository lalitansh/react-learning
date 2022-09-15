import React from 'react';
import { PLACES } from '../shared/places';
import './media.css';
import Menu from './menu';
import FaceIcon from '@mui/icons-material/Face';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { getLocalStorage , clearLocalStorage} from '../storage/storage';
import { useNavigate } from 'react-router-dom';
import Drawer from '../navigation/Drawer/Drawer';
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

<div id='rowStyle' className='row' //style={{flexDirection:'row', justifyContent:'space-between', margin: '0'}}
>
<Drawer />
<h1>Famous Places of India</h1>  
<FaceIcon
  style = {{fontSize: 50}}
  onClick = {()=> user ? submit() : navigate('/login')}
   />

</div>
<Menu places={PLACES} />
</div>
</>
  )
} 

export default Home

