import React, { Component } from 'react';
import PostData from './data/qoutes.json'

class PostList extends Component {
  render() {
    return (
      <div>
     
      {PostData.map((postDetail, index)=>{
       return <div>
                <lu> {postDetail.B} {postDetail.C} {postDetail.D}</lu>
              </div>
       
      })}
      </div>
    );
  }
}

export default PostList;
