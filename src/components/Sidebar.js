import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import * as productApi from '../api/productApi'
export default class Sidebar extends Component {
  state = {
    categories: []
  }
  componentWillMount() {
    productApi.getCategory().then(categories => this.setState({categories}))
  }
  render() {
    return (
      <div className="list-group">
        {this.state.categories.map(item => <NavLink key={item.id} to={`/category/${item.id}`} className="list-group-item">{item.name}</NavLink>)}
      </div>
    )
  }
}