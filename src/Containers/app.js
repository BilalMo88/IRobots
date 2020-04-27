import React, {Component} from 'react';
import CardList from '../Compenents/cardList';
import 'tachyons';
import SearchBox from '../Compenents/searchbox';
import  './App.css'
import Scroll from '../Compenents/scroll'


class App extends Component {

	constructor () {
		super()
		this.state = {
			robots:[],
			searchField:'',
		}
	}

	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value })
		

	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}))


	}

	render() {
		const filteredRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})

return (
		<div className='tc'>

  			<h1 className='tc f1'>I Robots</h1>
  			
  			<SearchBox searchChange={this.onSearchChange}/>
  			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
		); 
	}
		
}




export default App;