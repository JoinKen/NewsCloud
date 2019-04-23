
import React, { Component } from 'react'
import * as actions from '../../Actions/postaction';
import TopPostLeft from '../TopPosts/topPostsLeft';
import { connect } from "react-redux";
// import TopPostRightTop from '..//TopPosts/topPostsRight';
import TopPostRight from './topPostRight';

class listTopPosts extends Component {
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
    componentWillMount() {
        this.props.getAllPost();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.posts.code === 'ok') {
            this.setState({
                posts: nextProps.posts.data,
                haveData: true
            })
        }
    }
    showPostLeft = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.posts.map((iteam, index) => {
                // Lấy post thứ 3 trong bảng post csdl load lên
                if (this.state.posts[1] === iteam)
                    return <TopPostLeft key={index} info={iteam} />
            });
        }
        else {
            result = <div>Không có dữ liệu</div>
        }
        return result;
    }
    showPostRight = () => {
        let result;
        if (this.state.haveData === true) {
            result = this.state.posts.map((iteam, index) => {
                console.log(iteam.dateAdded);
                // Lấy post thứ 3 trong bảng post csdl load lên
                // dateAdded: "2019-02-01T17:00:00.000Z"
                if (iteam.dateAdded === '2019-03-01T17:00:00.000Z' || iteam.dateAdded === '2019-0-01T17:00:00.000Z')
                    // if(this.state.posts[3] === iteam)
                    return <TopPostRight key={index} info={iteam} />
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
                <div className="site-main-container">
                    {/* Start top-post Area */}
                    <section className="top-post-area pt-10">
                        <div className="container no-padding">
                            <div className="row small-gutters">
                                <div className="col-lg-8 top-post-left">
                                    {this.showPostLeft()}
                                    {/* <TopPostLeft/> */}
                                </div>
                                <div className="col-lg-4 top-post-right">
                                    {this.showPostRight()}
                                </div>
                                <div className="col-lg-12">
                                    <div className="news-tracker-wrap">
                                        <h6>
                                            <span>Breaking News:</span>{" "}
                                            <a href="#">Astronomy Binoculars A Great Alternative</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllPost: () => {
            dispatch(actions.getAllPost());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(listTopPosts);
