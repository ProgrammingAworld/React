'use strict';

import React from 'react';
import CommentList from './comment-list';

class CommentBox extends React.Component{
   constructor(props){
      super(props);
      this.state={data:[]};

      fetch(this.props.url)
         .then(response=>response.json())
            .then(data=>{
               this.setState({data:data})
            }).catch(e=>{
               console.log(e);
            })
      }

   render(){
      return (
         <div>
            <div className="m-index">
               <h1>评论</h1>
            </div>
            <CommentList data={this.state.data}/>
         </div>
      )
   }
}

export {CommentBox as default}
