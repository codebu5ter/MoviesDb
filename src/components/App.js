import React, {
  Component
} from 'react';
import MovieResults from './MovieResults'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div class="jumbotron">
            <h1 class="display-4">Movies Db</h1>
            <p class="lead">Who doesn't love movies?</p>
          </div>
        </div>
        <div className="row">
          <MovieResults />
        </div>
      </div>
    );
  }
}

export default App;
