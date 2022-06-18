import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='col-12'>
        <div class="card p-4">
            <div class="card-body text-left">
                <h2 class="card-title">A Warm Welcome</h2>
                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus saepe blanditiis autem dicta voluptate in dolores reprehenderit perferendis, molestiae molestias tempore! Dolorem consectetur assumenda non accusantium perspiciatis, veritatis debitis at?</p>
                <button className='btn btn-primary'>Call to action</button>
            </div>
        </div>
      </div>
    )
  }
}
