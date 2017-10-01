import React, { Component } from 'react';

//ROUTES
import { BrowserRouter as Router, Route } from 'react-router-dom';

//ASSETS
import './assets/css/global.min.css';

//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/pages/MainPage';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header text="Funcionou!!!" icon="fa-hand-rock-o" />
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/contact' component={Contact} />
                <Footer copy="Júlio Carneiro" year="2018" />
            </div>
        </Router>
    );
  }
}

export default App;
