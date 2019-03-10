import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Mohamed', age:'23'},
      {name:'Ahmed', age:'30'},
      {name:'Ali', age:'25'}
    ],

    OtherState: 'Any other state value'
  }

  SwitchNameHanlder = () =>{
       
    this.setState({ 
      persons: [
      {name:'Mohamed Abouelsaadat', age:'23'},
      {name:'Ahmed', age:'30'},
      {name:'Ali', age:'25'}
    ],
    OtherState: 'Value changed'
  });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <p>Git works!</p>
         <button onClick={this.SwitchNameHanlder}>Switch Name</button>
         <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}>Here is the childern of prop</Person>
         <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}></Person>
         <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/>
         <Person print ={this.state.OtherState}></Person>
        </header>
      </div>
    );
  }
}
export default App;
