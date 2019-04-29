

import React, { Component } from 'react';
import Iteam_best_top from '../PopularPosts/iteam_best_top';
import Iteam_best_bot from '../PopularPosts/iteam_best_bot';
import * as actions from '../../Actions/post_action';
import { connect } from "react-redux";

class popularPosts extends Component {
  constructor(props){
    super(props);
    this.state ={
      posts:{},
      haveData: false,
      idPost: "",
      tag: "",
      title: "",
      describe: "",
      dateAdded :"",
      numberOfRead:"",
      topic:"",
      img:"",
    }
  }
  componentWillMount(){
    this.props.getAllPosts();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.posts.code = "ok"){
      this.setState({
        posts: nextProps.posts.data,
        haveData: true
    })
    }
  }
  showIteam_Top =() =>{
    let result,dem=0;
        if (this.state.haveData === true) {
            result = this.state.posts.map((iteam, index) => {
             if(iteam.topic === "Ẩm thực"){
              dem ++;
             }
             if(dem === 1){
              return <Iteam_best_top key={index} info={iteam}/>
             }
            
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
  }
  showIteam_bot =() =>{
    let result,dem=0 ;
    if(this.state.haveData === true){
      result = this.state.posts.map((iteam,index) =>{
        if(iteam.topic === "Ẩm thực"){
          dem ++;
         }
         if(dem === 2){
          return <Iteam_best_bot key={index} info={iteam}/>
         }
        
        });
    }
    else {
      result = <div>Không có dữ liệu</div>
  }
  return result;
  }
  render() {
    return (
      <div>
        <div className="popular-post-wrap">
  <h4 className="title">Popular Posts</h4>
  {this.showIteam_Top()}
 {this.showIteam_bot()}
  
</div>

      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return {
   getAllPosts :() =>{
     dispatch(actions.getAllPost())
   }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (popularPosts);
