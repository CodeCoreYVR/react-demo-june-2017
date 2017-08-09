import React from 'react';
import Hello from './Hello';
import Shape from './Shape';
import OrangeBox from './OrangeBox';

function App (props) {
  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  };

  return (
    <div className='App' style={style}>
      <Hello name='Jon' bgColor='LightCyan' />
      <Hello name='Daenerys' fontFamily='Papyrus' />
      <Hello name='Cersei' />
      <OrangeBox />
      <Shape />
      <Shape bgColor='Red' />
      <Shape bgColor='Green' type='circle' />
    </div>
  );
}

export default App;
