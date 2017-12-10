import React from 'react';
import {NavLink, Link} from 'react-router-dom'
export default class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Vuveu's Store</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/wishlist" className="nav-link">
                  <button className="btn btn-danger"><i className="fa fa-heart fa-lg"></i> Wishlist</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <button className="btn btn-light"><i className="fa fa-shopping-cart fa-lg"></i> Giỏ hàng</button>
                </Link>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/"><button className="btn btn-success">Đăng nhập</button></a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}