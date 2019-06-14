import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
const Step1 = () => (
  <div>
    Step 1 <Link to="/step2">Next</Link>
  </div>
);

const Step2 = () => (
  <div>
    Step 2 <Link to="/step3">Next</Link>
  </div>
);

const Step3 = () => <div>Final</div>;

function App() {
  return (
    <Router>
      <h2>Processing</h2>
      <Switch>
        <Route path="/" exact component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
      </Switch>
    </Router>
  );
}

export {App};
