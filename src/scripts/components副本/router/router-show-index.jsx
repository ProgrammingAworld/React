'use strict';
import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
   render(){
      return (
         <h1>
            <Link to="tv/shows/6">电视节目列表</Link>
         </h1>
      )
   }
})
