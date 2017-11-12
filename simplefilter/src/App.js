import React, { Component } from 'react';
import './App.css';


const people =[
  {
    id: 1,
    first: "Sarah",
    last: "Kennedy",
    age: 35
  },
  {
    id: 2,
    first: "Jamie",
    last: "Clark",
    age: 37
  },
  {
    id: 3,
    first: "Hartley",
    last: "Middleton",
    age: 25
  },
  {
    id: 4,
    first: "Travis",
    last: "Wagner",
    age: 29
  }
]

function searchingFor(term){
  return function(x){
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      people: people,
      term: ''
    }
    this.searchHandler= this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    const {term, people} = this.state;
    return (
      <div className="App">
        <form style={{ marginTop: "3vh" }}>
          <input type="text"
                  onChange={this.searchHandler}
                  value={term}
          />
        </form>
        {
          people.filter(searchingFor(term)).map((person) => {
            return(
              <div key={person.id}>
                <h1> {person.first} </h1>
                <h1> {person.last} </h1>
                <h3> {person.age} </h3>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
