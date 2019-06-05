import React from 'react'
import api from '../connection-service/api'
import SearchBar from './searchBar'
import ItemList from './itemList'
class App extends React.Component {

	state = {items: []};

	onSearchSubmit = async (term) => {
		const reponse = await api.get('/search/photos', { params: {query: term}});
		this.setState({items: reponse.data.results})
	}

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ItemList items={this.state.items}/>
			</div>
		)
	}
}

export default App;