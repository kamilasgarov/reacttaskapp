import React, { Component } from 'react'
import User from "./User"
import UserPost from "./UserPost"
import PropTypes from 'prop-types'

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts:[],
          postId:0,
          isLoaded: false,
        }
      }
    componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        posts: json
      })
    })}
   showPost=(id)=>{
    
    this.setState({
      
      postId:id
    })
        
    }
    render() {
        const { isLoaded,posts,postId} = this.state
        const { users, deleteUser} = this.props
        if (!isLoaded) {
            return <div>loadding...</div>
          }
          else {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Address</th>
                                    <th>Company Name</th>
                                    <th>Delete</th>
                                    <th>show</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => {
                                        return (
                                            <User
                                                key={user.id}
                                                id={user.id}
                                                name={user.name}
                                                username={user.username}
                                                address={user.address}
                                                company={user.company}
                                                showPost={this.showPost}
                                                deleteUser={deleteUser}

                                            />

                                        )
                                    })
                                }

                            </tbody>


                        </table>


                       <UserPost posts={posts} postId={postId} />
                        <div>

                          

                        </div>
                    </div>
                </div>
            </div>
        )
    }}
}
Users.propTypes={
    users:PropTypes.array.isRequired,
    deleteUser:PropTypes.func.isRequired
}