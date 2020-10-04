import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Post from './components/Post'


function App() {
  return (
    <BrowserRouter>
    <div>
     <Switch>
       <Route path='/'component={Post} exact={true}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
