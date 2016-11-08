'use strict';

import React from 'react';
import CommentItem from './comment-item.js';

class CommentList extends React.Component{
   render(){
      let CommentNodes=this.props.data.map(function(comment,index) {
         return (
            <CommentItem key={index} author={comment.author} date={comment.date}>
            {comment.content}
            </CommentItem>
         )
      })
      return (
         <div>
            {CommentNodes}
         </div>
      )
   }
}

export {CommentList as default}
