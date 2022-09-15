import React,{useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import { NavItem, NavLink, TabContent,TabPane, Row } from 'reactstrap';
import { useAlert } from 'react-alert'
import Greet from '../components/greet';
import Error from '../components/Error';
import Home from "../components/Home";
import Users from '../components/Users';
import RootTab from '../components/RootTab';
import '../components/media.css';
import {
	Routes,
  Route,
	Link,
	useNavigate
} from "react-router-dom";
import { getLocalStorage } from '../storage/storage'

const NavigationRoutes=()=> {	

	const user = getLocalStorage('User')

		return (
			 <div className='App'>
				<Routes>
				{	user ? 
				<Route exact path="/" element={<Home />}  /> :
				<Route exact path="/login" element={<Users />}  />
				}
				<Route exact path="/tab" element={<RootTab />} />
				<Route exact path="/" element={<Home />}  />
        <Route exact path="/login" element={<Users />}  />
				<Route exact path="/greet" element={<Greet />}  />
				<Route element={Error} />
				</Routes>
			 </div>
		);
}

export default NavigationRoutes;
