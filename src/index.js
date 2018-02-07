import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBxCH3zwAsDtdG3elM9xYSlzKhLw1h1SlU';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = { videos: [] };

        YTsearch({ key: API_KEY, term: 'surfboards'}, (videos) => {           
            this.setState({ videos })
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

const container = document.querySelector('.container');

ReactDOM.render(
    <App />,
    container
    );
