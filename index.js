import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FootComp from './components/footer.component';
import HeadComp from './components/header.component';
import MainComp from './components/main.component';
import NavheadComp from './components/navbarhead.component';

class MainApp extends Component{
  render(){
    return <div>
      <NavheadComp/>
      <HeadComp/>
      <MainComp/>
      <FootComp/>
    </div>
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));


