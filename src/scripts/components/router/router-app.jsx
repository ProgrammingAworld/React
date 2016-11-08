'use strict';

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
   render(){
      return (
         <div>
            <div>
               <Link to="/">首页</Link>
               <Link to="/tv">电视节目</Link>
            </div>
            {this.props.children}
         </div>
      )
   }
})
