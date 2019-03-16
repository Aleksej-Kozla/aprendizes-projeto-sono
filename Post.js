import React, { Component } from 'react';
import './Post.css';

export default class Post extends Component{
  render(){
    return(
      <div>
          <link href="https://fonts.googleapis.com/css?family=Mali" rel="stylesheet" />
        <h2>{this.props.tittle}</h2>
        <img src={this.props.img} alt='foto de cão'/>
        <p>{this.props.text} </p>
      </div>
    )
  }
}
