import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { FadeLoader } from 'react-spinners'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Answer from './Components/Main/Answer'
import Footer from './Components/Footer/Footer'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import Question from './Components/Questions/Question'
import './App.css'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      IsLoggedIn:true,
      posts:[
        {
          id:123,
          title:'THe title goes here',
          content:'the content Goes here the content Goes here the content Goes here the content Goes here'
        },
        {
          id:126,
          title:'THe title goes here',
          content:'the content Goes here'
        }
      ]
    }
  }
  
  render() {
    if(!this.state.IsLoggedIn){
      return(<SignIn></SignIn>)
    }
    return (
      <BrowserRouter><div className="container">
        <Header></Header>
        <hr></hr>

        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route path='/login' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/question' component={Question}></Route>
          <Route path='/answer/:answerId' component={Answer}></Route>
        </Switch>
        <Footer></Footer>
      </div>
      </BrowserRouter>
    )
  }
}
