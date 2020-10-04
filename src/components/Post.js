import React from 'react'
import { connect } from 'react-redux'
import { setPost } from '../actions/postAction'

class Post extends React.Component{
    constructor(props){
        console.log(props)
        super(props)
        this.state={
             search:'',
             openForm:'false',
             title:'',
             description:'',
             showPosts:'false'
        }
    }
    handlePost=()=>{
        this.setState({
            openForm:'true'
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description,
            search:this.state.search
        }
        console.log(formData,'display')
        this.props.dispatch(setPost(formData))
        
    }
    handlePublished=()=>{
     this.setState({
         showPosts:'true'
     })
     }
    render(){
        //display posts based on the search text//
        let filteredPosts=this.props.posts.filter((post)=>{
        return post.title.indexOf(this.state.search) !==-1
        })
    return(
    <div class="container" style={{border:"1px solid black",backgroundColor:"lightgoldenrodyellow"}}>
    <h2>Post's Application</h2>
    <div class="nav-bar" style={{marginBottom:"5%"}}>
    <input type="search" placeholder="Search Posts" name="search" onChange={this.handleChange} style={{width:"50%",borderRadius:"20px",textAlign:"center",marginLeft:"20%"}} class="form-control mr-sm-2"/>
    </div>
    <div class="row">
    <div class="col-md-6">
    <button class="btn btn-danger" style={{width:"50%"}} onClick={()=>{this.handlePost()}}>New Post</button>
    </div>
    <div class="col-md-6">
    <button class="btn btn-danger" style={{width:"50%"}} onClick={()=>{this.handlePublished()}}>Published</button>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-md-6">
            {/* <h2>{this.props.posts.length}</h2> */}
            {this.state.openForm=='true' && <form onSubmit={this.handleSubmit}>
                   <label>Title</label><br/>
                   <input type="text" name="title" onChange={this.handleChange}/><br/>
                   <label>Post description</label><br/>
                   <textarea type="text" name="description" onChange={this.handleChange}/><br/>
                   <input type="submit"value="Publish" class="btn btn-warning"/>
                                             </form>}
    </div>
             <div class="col-md-6" style={{marginTop:"20px"}}>
             {this.state.showPosts=='true' && 
                filteredPosts.map((ele)=>{
                return (<div class ="card" style={{marginTop:"5px",backgroundColor:"lightsteelblue"}}>
                    <h4 style={{textDecoration:"underline"}}>{ele.title}</h4>
                    <p>{ele.description}</p>
    </div>  )})}
    </div>
    </div>
    </div>
    </div>
    </div>               
    )}
}
const mapStateToProps=(state)=>{
    return{
    posts :state.posts
    }
    }
export default connect(mapStateToProps)(Post) 