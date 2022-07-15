import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Books />
        </Route>
        <Route path="/categories" exact>
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
