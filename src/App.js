import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Ajay', age: 29},
      { name: 'Vijay', age: 28},
      { name: 'Vikram', age: 26}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("Clicked");
    this.setState({
      persons: [
        { name: newName, age: 29},
        { name: 'Vijay', age: 28},
        { name: 'Vikram', age: 27}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ajay', age: 29},
        { name: event.target.value, age: 28},
        { name: 'Vikram', age: 27}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Ajay!!")}
          ><strong>I am married.</strong></Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            changed={this.nameChangeHandler}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, I am a React Developer!</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
          {/* {
            this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, "Ajay!!")}
              ><strong>I am married.</strong></Person>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                changed={this.nameChangeHandler}/>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> : null
          } */}
      </div>
    );
  }
} 

export default App;
