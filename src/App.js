import React, {Component, Fragment} from 'react' ;
import TextInput from "./components/TextInput";
import Table from "./components/Table";
import Form from "./components/Form";
class App extends Component {
  state = { 
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index //save new list without the i saved in the button
      }),
    });
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  } 

  render() {

    const name = "Mikael";
  
  return (
      <Fragment className="container">
       <header>
         <h1>My first react project</h1>
       </header>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit ={this.handleSubmit} />
        <TextInput name={name} />
        
        <footer>&copy; {name} </footer>
      </Fragment>
    );
  }
}

export default App