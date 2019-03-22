import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { MyComponent } from 'package1/src/components';

import _default from '@babel/core/lib/tools/build-external-helpers';
// import _extends from '@babel/runtime/helpers/esm/extends';

const App = () => {
  console.log(_default);
  return (
    <Router>
      <Route path="/" component={MyComponent} />
    </Router>
  );
};

render(<App />, document.getElementById('root'));
