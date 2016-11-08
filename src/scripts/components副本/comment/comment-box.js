'use strict';

import React from 'react';
import CommentForm from './comment-form.js';
import CommentList from './comment-list.js';

class CommentBox extends React.Component{
   constructor(props){
      super(props);
      this.state={data:[]};
      fetch(this.props.url)
         .then(res=>res.json())
            .then(data=>{this.setState({data:data})})
               .catch(err=>{console.log(err)})
   };
   render(){
      return(
         <div className="m-index">
           <div>
             <h1>评论</h1>
           </div>
           <CommentList data={this.state.data} />
           <CommentForm />
         </div>
      )
   }
}

export {CommentBox as default}
