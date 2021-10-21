import ShopOverviewPage_36 from './pages/ShopOverviewPage_36';
import Homepage_36 from './pages/Homepage_36';
import { Switch, Route } from 'react-router-dom'
import ShopTwo_36 from './pages/ShopTwoPage_36';
import ContactPage_36 from './pages/ContactPage_36';
import SigninPage_36 from './pages/SigninPage_36';
import Header_36 from './components/Header_36'
function App() {
  return (

    <div>
      <Header_36 />
      <Switch>
        <Route exact path='/' component={Homepage_36} />
        <Route exact path='/shop_36' component={ShopOverviewPage_36} />
        <Route exact path='/contact_36' component={ContactPage_36} />
        <Route exact path='/signin_36' component={SigninPage_36} />
      </Switch>
    </div>
  );
}

export default App;
