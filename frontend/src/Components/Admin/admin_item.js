
import React, { Component } from 'react'

class admin_item extends Component {
    render() {
        return (

            <tbody>
                <tr>
                    <td>{this.props.info.idPost}</td>
                    <td>{this.props.info.title}</td>
                    <td>{this.props.info.describe}</td>
                    <td>{this.props.info.topic}</td>
                    <td>{this.props.info.img}</td>
                    <td>
                        <div className="action">
                            <div className="delete"><i className="fas fa-trash-alt"></i></div>
                            <div className="edit" data-toggle="modal"
                                data-target="#myModal1"><i className="fas fa-pen"></i></div></div>
                    </td>
                    <div className="modal" id="myModal1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Cập nhật tin tức</h4>
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


                                    </form>

                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Sửa
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

                </tr>

            </tbody>




        )
    }
}
export default admin_item
