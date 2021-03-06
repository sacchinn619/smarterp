import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
// import { setPost } from './actions/postAction'


const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
// store.dispatch(setPost())
const jsx=  (<Provider store={store} >
                 <App/>
            </Provider>)
 

ReactDOM.render(jsx,document.getElementById('root'))


