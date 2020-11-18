import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <div>landing</div>} />
      <Route path="/locations" component={() => <div>locations</div>} />
    </Switch>
  );
};

export default Routes;
