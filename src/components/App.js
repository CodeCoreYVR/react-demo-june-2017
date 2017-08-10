import React from 'react';
import Hello from './Hello';
import Shape from './Shape';
import OrangeBox from './OrangeBox';
import Greetings from './Greetings';

function App (props) {
  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  };

  return (
    <div className='App' style={style}>
      <Hello name='Jon' bgColor='LightCyan' isBye />
      <Hello name='Daenerys' fontFamily='Papyrus' />
      <Hello name='Cersei' isBye={true} />
      <OrangeBox />
      <Shape colors={
        ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
      } />
      <Shape bgColor='Red' />
      <Shape bgColor='Green' type='circle' />
      <Greetings names={['Jo', 'Dave', 'Lana', 'Dana', 'Tom']} />
    </div>
  );
}

export default App;
