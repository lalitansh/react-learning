import React from 'react';

export default function CommonHeader(){
return(
  <div className='row' style={styles.rowDiv}>
  <h2>Header example</h2>
  <h2>Header example</h2>
  <h2>Header example</h2>
  </div>
)
}

const styles = {
rowDiv : {
  flexDirection: 'row', 
  justifyContent:'space-between', 
  margin:'0',
  position:'sticky', 
  top:0, 
  zIndex: '1', 
  backgroundColor:'lightblue'
}
}