import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props) 
            this.state = { term: '' }
    }

    onSearch(term) {
      this.setState({ term })
      this.props.onInput(term)
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    placeholder="What would you like to search?"
                    value = {this.state.term}  
                    onChange={event => this.onSearch(event.target.value)} />
            </div>
        )
    }
}

export default SearchBar