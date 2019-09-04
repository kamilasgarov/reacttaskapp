import React, { Component } from 'react';

export default class User extends Component {
    onDeleteUser=(e)=>{
        const {id,deleteUser}=this.props
        deleteUser(id)

    }
   onShowPost=(e)=>{
    const {id,showPost}=this.props
        showPost(id)

   }
    render() {
        const {id,name,username,address,company}=this.props

       

        return (
            <tr>
                       <td>{id}</td>
                        <td>{name}</td>
                        <td>{username}</td>
                        <td>{address.city}</td>
                        <td>{company.name}</td>
                        <td>
                        <button onClick={this.onDeleteUser} type="button" className="btn btn-primary">delete</button>
                        </td>
                        <td>
                        <button onClick={this.onShowPost} type="button" className="btn btn-primary">show</button>
                        </td>
               
            </tr>
        );
    }
}
