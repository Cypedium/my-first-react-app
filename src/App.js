import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from "./components/TextInput";
import Table from "./components/Table";



class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    const name = "Mikael";
  
  return (
      <div>
       <header>
         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
        </header>
       <div className="container">
         <Table />
          <TextInput name={name} />
        </div>
        <footer>&copy; {name} </footer>
      </div>
    );
  }
}

export default App