import logo from './logo.svg';
import './App.css';
import {React, Component} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import API from './utils/API';

class App extends Component {
  state = {
    movieName: ""
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleClick = event => {
    event.preventDefault();
    const {movieName} = this.state;
    this.getMovieDetails();
    console.log(movieName);
  }

  getMovieDetails = () => {
    const {movieName} = this.state;
    API.getDetails(movieName).then(res => {
      console.log(res);
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
    </div>
  );
}
}

export default App;
