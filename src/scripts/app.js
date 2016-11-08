'use strict';
import "../styles/usage/page/app.scss";

import React from 'react';
import ReactDOM from 'react-dom';
// import CommentBox from './components/comment/comment-box.js';
import {Router,Route,hashHistory,IndexRoute,Redirect } from 'react-router';

import App from './components/router/router-app.jsx';
import TV from './components/router/router-tv.jsx';
import Shows from './components/router/router-show.jsx';
import ShowIndex from './components/router/router-list.jsx';

let HandleEnter=()=>{
   console.log("enter");
}
let HandleLeave=()=>{
   console.log("leave");
}

ReactDOM.render((
   <Router history={hashHistory}>
      <Route path="/" component={App}>
         <Route path="tv" component={TV}>
            <IndexRoute component={ShowIndex}></IndexRoute>
            <Route path="/shows/:id" onEnter={HandleEnter} onLeave={HandleLeave} component={Shows}></Route>
            <Redirect from="shows/:id" to="/shows/:id" />
         </Route>
      </Route>
   </Router>
),app)

//实现热替换需要的代码
if(module.hot){
   module.hot.accept();
}
