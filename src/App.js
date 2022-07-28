import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <div className={styles.app}>
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
