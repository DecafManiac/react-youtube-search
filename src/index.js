import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Extra from './components/extra';
const API_KEY = 'AIzaSyAC9w1iBQY8QeeNr3JE2AuYcLLgCW77dE0';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        this.videoSearch(' ');
    }

    videoSearch(term) {
          YTSearch ({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300) // lodash to delay search
        return (             
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
                <Extra video={this.state.selectedVideo}/>
            </div>
        );
    }  
}


ReactDOM.render(<App />, document.querySelector('.container'));
 