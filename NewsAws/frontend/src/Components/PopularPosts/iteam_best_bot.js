
import React, { Component } from 'react'
import Item_best_bot_item from '../PopularPosts/item_best_bot_item';
import { connect } from 'react-redux';

class iteam_best_bot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {},
            haveData: false,
            idPost: "",
            tag: "",
            title: "",
            describe: "",
            dateAdded: "",
            numberOfRead: "",
            topic: "",
            img: "",
        }
    }
    // componentWillMount() {
    //   this.props.getAllPost();
    // }
    componentWillReceiveProps(nextProps) {
        if (nextProps.posts.code === 'ok') {
            this.setState({
                posts: nextProps.posts.data,
                haveData: true
            })
        }
    }
    showLeft =() =>{
            let result,dem=0 ;
            if(this.state.haveData === true){
              result = this.state.posts.map((iteam,index) =>{
                if(iteam.topic === "Ẩm thực"){
                  dem ++;
                  if(dem >=2 && dem <=3){
                    //   console.log(dem);
                    return <Item_best_bot_item key={index} info={iteam}/>
                   }
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
                    <div className="row mt-20 medium-gutters">
                        {this.showLeft()}
                    </div>
                </div>
            )
        }
    }
    const mapStateToProps = state => {
        return {
            posts: state.posts
        }
    }

    export default connect(mapStateToProps,null) (iteam_best_bot)
