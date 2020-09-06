import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {FilterBox} from './components/filter-box/filter-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      count:0
    }


  }

  incCount = () => {
    let {count} = this.state;
    count=count+1;
    console.log(count);
    this.setState({
      count:count
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

   handleChange= e => {
    this.setState({searchField:e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <FilterBox
          placeholder="search monster"
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
        <button onClick={this.incCount}>inc count</button>
        <h5>{this.state.count}</h5>
      </div>
    )
  }
}

export default App;
