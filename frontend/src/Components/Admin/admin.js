
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../Actions/postaction';
import Admin_item from './admin_item';

class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: {},
            haveData: false,
            idPost: "",
            tag: "",
            title: "",
            describe: "",
            // dateAdded:"",
            // numberOfRead:"",
            topic: "",
            img: ""
        }
    }
    componentWillMount() {
        this.props.getAllPost();
        this.props.insertPost();
    }
    /* Hàm này dc gọi khi component nhận dc một props mới*/
    componentWillReceiveProps(nextProps) {
        if (nextProps.posts.code === "ok") {
            this.setState({
                posts: nextProps.posts.data,
                haveData: true
            });
        }
    }

    showPost = () => {
        let result;

        if (this.state.haveData === true) {
            result = this.state.posts.map((item, index) => {
                return <Admin_item key={index} info={item} />
            });
        } else {
            result = "Không có dữ liệu";
        }
        return result;
    };
    render() {
        return (
            <div>
                <div className="total_page">
                    <div className="container">
                        <div className="admin_content">
                            <h2>Trang quản lí Magazine</h2>
                            <div className="addPost">
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                >
                                    <i className="fas fa-plus" /> Thêm tin tức
                    </button>
                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title">Thêm tin tức</h4>
                                                <button
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="modal"
                                                >
                                                    ×
                            </button>
                                            </div>
                                            <div className="modal-body">
                                                <form action="/action_page.php">
                                                    <div className="form-group">
                                                        <label htmlFor="idPost">IdPost:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="idPost"
                                                            placeholder="Enter idPost"
                                                            name="idPost"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="tittle">Tittle:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="tittle"
                                                            placeholder="Enter tittle"
                                                            name="tittle"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="describe">Describe:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="describe"
                                                            placeholder="Enter describe"
                                                            name="describe"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="topic">Topic:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="topic"
                                                            placeholder="Enter topic"
                                                            name="topic"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="image">Image:</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="image"
                                                            placeholder="Enter image"
                                                            name="image"
                                                        />
                                                    </div>

                                                    {/* <button type="submit" className="btn btn-primary">
                                                        Submit
  </button> */}
                                                </form>


                                            </div>

                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-success"
                                                    data-dismiss="modal"
                                                >
                                                    Thêm
                            </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    data-dismiss="modal"
                                                >
                                                    Close
                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admin_table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>idPost</th>
                                        <th>title</th>
                                        <th>describe</th>
                                        <th>Topic</th>
                                        <th>img</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                {this.showPost()}

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllPost: () => {
            dispatch(actions.getAllPost());
        },
        insertPost: () => {
            dispatch(actions.insertPostAct());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(admin)

