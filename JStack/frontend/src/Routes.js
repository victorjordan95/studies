import { Switch, Route } from 'react-router-dom';
import EditContacts from './pages/EditContacts';
import Home from './pages/Home';
import NewContacts from './pages/NewContacts';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContacts} />
      <Route path="/edit/:id" component={EditContacts} />
    </Switch>
  );
}
