import { React, Component } from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import List from '../components/List';
import API from '../utils/API';

class Home extends Component {
  state = {
    movieName: "",
    movies: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleClick = event => {
    event.preventDefault();
    const { movieName } = this.state;
    this.getMovieDetails();
    console.log(movieName);
    console.log(this.state.movies);
  }

  getMovieDetails = () => {
    const { movieName } = this.state;
    API.getDetails(movieName).then(res => {
      const { results } = res.data;
      this.setState({
        movies: results.splice(0, 10)
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Form
          handleInputChange={this.handleInputChange}
          handleClick={this.handleClick}
        />
        {this.state.movies.length > 0 ?
          this.state.movies.map((movie, index) => {
            return (
            <List
              title={movie.title}
              overview={movie.overview}
              imageSrc={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
              key={index}
              index={index}
            />
            )
          })
          : ""}
      </div>
    );
  }
}

export default Home;