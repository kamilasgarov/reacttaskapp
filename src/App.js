import React, { Component } from 'react'
import './App.css';
import Users from "./component/Users"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts:[],
      isLoaded: false,
    }
  }
  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter(user => id !== user.id)
    })
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          users: json
        })
      }

      )
     
  }
 
  render() {
    const { isLoaded, users} = this.state

    if (!isLoaded) {
      return <div>loadding...</div>
    }
    else {
      return (

        <div className="App">
          <Users users={users}  showPost={this.showPost} deleteUser={this.deleteUser} />
        </div>
      )
    }
  }
}


export default App;
