import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='col-3'>
        <div class="card my-4">
            <img className="card-img-top" src="./../../logo512.png" alt />
            <div class="card-body">
                <h4 class="card-title">Card Title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore consectetur sit minus voluptatem blanditiis eum at atque</p>
                <button className='btn btn-primary'>Find Out More</button>
            </div>
        </div>
      </div>
    )
  }
}
