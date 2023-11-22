import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cardlist from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    // console.log('constructor')
  }

  // This code will run when React renders the component
  // The only time a component will "remount" is if it was unmounted
  componentDidMount(){
    // console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => 
        this.setState(
          () => {
            return {monsters: users};
          },
          // () => {
          //   console.log(this.state);
          // }
        )
      )
  }
  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    // console.log('render');

    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search' 
          onChange={ onSearchChange }></input>
        {/* {
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        } */}
        <Cardlist monsters={filteredMonsters} ></Cardlist>
      </div>
    );
  }
}

export default App;
