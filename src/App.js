import React, {Component} from 'react' ;

import './App.css';
import TextInput from "./components/TextInput";
import Table from "./components/Table";



class App extends Component {
  state = { 
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Aspring actress'
      },
      {
        name: 'Dennis',
        job: 'Bartender'
      }
    ]
  };
  render() {
    
    const name = "Mikael";
  
  return (
      <fragment className="container">
       <header>
         <h1>My first react project</h1>
       </header>
      
        <Table characterData={this.state.characters} />
        <TextInput name={name} />
        
        <footer>&copy; {name} </footer>
      </fragment>
    );
  }
}

export default App