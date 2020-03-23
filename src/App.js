//When a component needs access to items from redux state, you need to 'subscribe' the component using the connect method from react-redux. If you are using any actions from a reducer, you will also need to import them(see getUser import below).
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from './redux/reducer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //Redux is not a total replacement of state items. Handling inputs or data specific to a single component should still be done within the component itself.
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createUser = () => {
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }

    //Action gets invoked, passing the newUser object. See the getUser action in the reducer.js file to follow the data.
    this.props.getUser(newUser)
  }

  render(){
    console.log(this.props)
    console.log(this.props.userReducer.user)
    return (
      <div className="App">
        <input value={this.state.firstName} name='firstName' onChange={(event) => this.handleInput(event)}/>
        <input value={this.state.lastName} name='lastName' onChange={(event) => this.handleInput(event)}/>
        <button onClick={this.createUser}>Click Me</button>
      </div>
    )
  }
}

//mapStateToProps is a function where you define which state items you would like the component to subscribe to. The commented code below is the structure for bringing in individual state items. The uncommented code is how you would subscribe to the entirety of redux state.

// const mapStateToProps = reduxState => {
//   return {
//     user: reduxState.user
//   }
// }

const mapStateToProps = reduxState => reduxState;

//mapDispatchToProps can be used to bundle multiple actions, and then be passed as the second argument to the first set of parenthesis in connect.

// const mapDispatchToProps = {
//   getUser
// }

//connect needs to be invoked and passed mapStateToProps, any actions you are using and the component that is subscribing to redux. If you are using an action but are not subscribing to any state items, simply pass 'null' as the first argument.
export default connect(mapStateToProps, {getUser})(App);