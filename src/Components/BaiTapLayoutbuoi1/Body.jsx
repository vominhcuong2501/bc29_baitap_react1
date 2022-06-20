import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
      <div className='container mt-4'>
        <div className='row'>
                <Banner />
                <Item />
                <Item />
                <Item />
                <Item />

        </div>
      </div>
    )
  }
}
