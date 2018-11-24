import React from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Accounts } from 'meteor/std:accounts-semantic'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

// import './main.html';

class CheckSemantic extends React.Component {
  render() {
    return (
        <div>
      <Button primary>
      Button
      </Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
    );
  }
}


Meteor.startup( () => {
  render(<CheckSemantic />, document.getElementById('app'));
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/signin" component={() => <Accounts.ui.LoginForm />} />
        <Route path="/signup" component={() => <Accounts.ui.LoginForm formState={STATES.SIGN_UP} />} />
        <Route path="/hello/:name" component={ Hello } />
      </Route>
      <Route path="/admin" component={ App }>
        <IndexRoute component={ Admin } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById( 'react-root' )
  );
});
