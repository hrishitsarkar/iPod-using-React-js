

import React from 'react';
import Ipod from './components/Ipod';
class App extends React.Component {
  render() {

    return (
      <>
      <div className="container" draggable= "false">
      <Ipod />
      </div>
      </>
    )
  }
}

export default App;
