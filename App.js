import React, { Component } from 'react';
import Post from './Post';
import dog from './dog.jpg';
import dog2 from './dog2.jpg';

export default class App extends Component{
  render(){
    return(
      <div>
        <Post tittle="Aleksej" text="meu dogo" img={dog}/>
       
        <Post tittle="Gabriel" text="meu dogo2" img={dog2}/>
       
        <Post />

      </div>
    )
  }
}
