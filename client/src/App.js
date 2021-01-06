import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/auth/Navbar';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
