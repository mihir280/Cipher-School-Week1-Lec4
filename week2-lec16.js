import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  name="mili"
  render(){
    // names ="mili"
    return(
      <div>
        <h1>This is {this.name}</h1>
      </div>
    );
    
  }
}
export default App;
