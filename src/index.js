import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAnV2ovQ9F8i-eAJ3p8PTqUInF6zC9Z3x4';


//create a new component. This component should produce some HTML

// const App = function() {
//   return <div>Hi!</div>;
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=> {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }



  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}


// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   )
// }

//Take this component's html and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
