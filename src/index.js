import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.jsx';
import YTsearch from 'youtube-api-search';
import VideoList from './components/video_list.jsx';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBxCH3zwAsDtdG3elM9xYSlzKhLw1h1SlU';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          videos: [],
          selectedVideo: null
         };

        YTsearch({ key: API_KEY, term: 'surfboards'}, (videos) => {           
            this.setState({ 
              videos: videos,
              selectedVideo: videos[0]
             })
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} 
                />
            </div>
        );
    }
}

const container = document.querySelector('.container');

ReactDOM.render(
    <App />,
    container
    );
