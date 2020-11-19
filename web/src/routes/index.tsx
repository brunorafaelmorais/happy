import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Locations from '../pages/Locations';
import OrphanageDetail from '../pages/OrphanageDetail';
import OrphanageNew from '../pages/OrphanageNew';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/locations" component={Locations} />
      <Route path="/orphanages/create" component={OrphanageNew} />
      <Route path="/orphanages/:id" component={OrphanageDetail} />
    </Switch>
  );
};

export default Routes;
