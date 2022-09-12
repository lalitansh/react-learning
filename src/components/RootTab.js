import React, { useState } from 'react';
import '../App.css';
import { NavItem, NavLink, TabContent,TabPane, Row } from 'reactstrap';
import Home from "../components/Home";
import Users from '../components/Users';
import '../components/media.css';


const RootTab=()=> {

  const [activeTab, setActiveTab] = useState('1')

  return (
    <>
    <div className = "App" id='contanerBack'>
    
  <div class="row">
  <div class="col">
  <NavItem>
      
      <NavLink id='tabBack' className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
      Home
      </NavLink>
    </NavItem>
  </div>
  <div class="col">
  <NavItem>
        <NavLink id='tabBack' className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
          Users
        </NavLink>
      </NavItem>
  </div>
</div>
    <Row>
     
      
    
     
    </Row>
    
    <TabContent 
    activeTab={activeTab}>
    
    {activeTab == 1 && <TabPane tabId="1"><Home/></TabPane>}
    {activeTab == 2 && <TabPane tabId="2"><Users/></TabPane>}
    
    </TabContent>
  </div>

  
  
          </>
  )

}

export default RootTab