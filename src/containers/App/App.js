import React, { Component } from 'react';
// import {Container} from '../../theme/globalStyle';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
