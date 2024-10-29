import logo from './logo.svg';
import './App.css';
import {React, Component} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';

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

  render() {
  return (
    <div>
      <Navbar />
      <Form 
        handleInputChange={this.handleInputChange}
      />
    </div>
  );
}
}

export default App;
