import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import SignInPage from './pages/signinpage/siginpage.component.jsx';
import SymbolPage from './pages/symbol/symbol.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) => {

  
  useEffect(() => {
    checkUserSession()}, [checkUserSession]
  );
  
  return (
    <div>
        <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" render={() =>
                currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInPage />
                )
              } 
            />
          </Switch>
          <Route exact path={`/symbol/:symbol`} component={SymbolPage} />
        <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
