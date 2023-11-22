import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <SearchBox 
          className = 'monsters-search-box'
          onChangeHandler = { onSearchChange } 
          placeHolder = 'search monsters'>
        </SearchBox>
        <CardList monsters={filteredMonsters} ></CardList>
      </div>
    );
  }
}

export default App;
