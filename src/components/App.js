import React from 'react';
import Hello from './Hello';

function App (props) {
  return (
    <div className='App'>
      <Hello name='Jon' bgColor='LightCyan' />
      <Hello name='Daenerys' fontFamily='Papyrus' />
      <Hello name='Cersei' />
    </div>
  );
}

export default App;
