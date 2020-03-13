import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-signup/sign-in-and-signup.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount(){
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFormAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route exact={true} path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
