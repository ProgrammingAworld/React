'use strict';

import React from 'react';

export default React.createClass({
   render(){
      return (
         <div>
            <h1>具体的电视节目内容,通过的this.props.params.id来获取
            {this.props.params.id}</h1>
         </div>
      )
   }
})
