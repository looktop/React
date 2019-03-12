import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About,
  Posts
} from 'pages';
import Menu from 'components/Menu';

const App = () => {
  return (
    <div>
      <Menu/>
      {/* exact 값은 주소가 여기에서 설정한 path와 정확히 일치할 때만 보이도록 합니다. */}
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/about" component={About}/> */}
      <Route path="/about/:name?" component={About}/>
      <Route path="/posts" component={Posts}/>
    </div>
  );
};

export default App;