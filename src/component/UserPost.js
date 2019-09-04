import React, { Component } from 'react'


export default class UserPost extends Component {
  
  
 
  

    render() {

      
      const {postId, posts} = this.props
        return (
         
          <div>

                <div className="card mt-2">
                <h4 className="card-header">
                {
                  posts[postId].title
                }
                </h4>
                <div className="card-body">
                                 {
                                  posts[postId].body
                                 }
                </div>
                </div>
                    
            
             
              
           
              
          </div>
           
        )
    }
}

