
import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../../Actions/useractions';
import { Redirect } from 'react-router-dom';

class login extends Component {
    constructor(props){
        super(props);
        this.state ={
            user: '',
            pass: '',
            isWrong: false,
            redirect : false
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.users.code === 204 ){
            this.setState({
                isWrong : true
            })
        }
        else{
            this.setState({
                isWrong : false,
                redirect : true
            })
        }
        //console.log(nextProps.user)
    }
    log_in = () => {
        this.props.LoginAct(this.state.user, this.state.pass)
    }
    onChangeUser = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
          user : value
        });
    }
    onChangePass = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
          pass : value
        });
    }
    showWrongPass = () =>{
        if(this.state.isWrong === true){
            return(
                <div>
                    <p className="Danger">Mật Khẩu hoặc tên đăng nhập sai</p>
                </div>
            )
        }
    }
    haveRedirect = () =>{
        if(this.state.redirect === true){
            return <Redirect to="/Admin" />
        }
    }

    render() {
        return (
            <div>
                <div className="form_login form-bg">
                    <div className="container">
                    <h1 className="text-center">Login</h1>
                        <div className="row">
                        <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <form className="form-horizontal">
                             
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <i className="fa fa-envelope-o" />
                                        <input
                                        onChange={this.onChangeUser}
                                            required
                                            name="login[username]"
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <i className="fa fa-lock" />
                                        <input
                                        onChange={this.onChangePass}
                                            required
                                            name="login[password]"
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                        <a href="#" className="forgot-pass">
                                            forgot?
            </a>
                                    </div>
                                    <div className="form-group">
                                        <div className="signup">
                                            No account?
              <a href="#">signup</a>
                                        </div>
                                        {this.showWrongPass()}
                                        <button onClick={this.log_in} type="submit" className="btn btn-default">
                                            login
            </button>
            {this.haveRedirect()}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        users : state.users
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        LoginAct :() =>{
            dispatch(actions.LoginAct());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(login)
