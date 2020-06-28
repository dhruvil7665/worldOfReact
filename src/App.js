import React from 'react';
import {
  BrowserRouter as Router,
  Route,Switch,
} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from "./NavBar";
import NotFoundPage from "./pages/404Page";


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div id="page-body">
      <Switch>   <Route path="/" component={HomePage} exact/>
     <Route path="/about" component={AboutPage} />
     <Route path="/articles-list" component={ArticleListPage}/>
     <Route path="/articles/:name" component={ArticlePage} />
     <Route component={NotFoundPage} /></Switch>
  
    </div>
    </div>
    </Router>
  );
}

export default App;
