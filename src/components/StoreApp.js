import React, {Component} from 'react'
import NavBar from './NavBar'
import Itempage from './Itempage'
import Homepage from './Homepage'
import Sidebar from './Sidebar'
import Cart from './Cart'
import Categorypage from './Categorypage'
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Wishlist from './Wishlist'
export default class StoreApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container my-5">
            <Switch>
              <Route path='/cart' component={Cart} />              
              <Route path='/wishlist' component={Wishlist} />
              <Route path='/'>
                <div className="row mt-5">
                  <div className="col-lg-3">
                    <h3 className="mt-4 my-4">Categories</h3>
                    <Sidebar />
                  </div>
                  <div className="col-lg-9">
                    <Route path='/' exact component={Homepage} />
                    <Route path='/category/:id' component={Categorypage}/>
                    <Route path='/product/:id' component={Itempage} />
                  </div>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}