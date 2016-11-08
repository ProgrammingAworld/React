'use strict';

import React from 'react';

class CommentForm extends React.Component{
   render(){
      return (
         <div className="yo-list yp-list-a">
            <label className="item item-input">
               <input className="yo-input flex" type="text" placeholder="请输入用户名" />
            </label>
            <label className="item item-input">
               <textarea className="yo-input flex" placeholder="留言内容"></textarea>
             </label>
             <label className="item item-input">
               <button className="yo-btn yo-btn-l">发表评论</button>
             </label>
         </div>
      )
   }
}
export {CommentForm as default}
