'use strict';

import React from 'react';
class ComentForm extends React.Component{
   render(){
      return (
         <div className="yo-list">
            <label className="item item-input">
               <input type="text" className="yo-input" placeholder="发布人" />
            </label>
            <label className="item item-input">
               <textarea type="text" className="yo-input" placeholder="发布人"></textarea>
            </label>
            <label>
               <button classNameyo-btn yo-btn-l>发表评论吧<button>
            </label>
         </div>
      )
   }
}

export {CommonFrom as default}
