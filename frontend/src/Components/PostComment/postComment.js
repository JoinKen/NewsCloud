import React, { Component } from 'react'

 class postComment extends Component {
  render() {
    return (
      <div>
        <div className="comment-form">
  <h4>Post Comment</h4>
  <form>
    <div className="form-group form-inline">
      <div className="form-group col-lg-6 col-md-12 name">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter Name"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Enter Name'"
        />
      </div>
      <div className="form-group col-lg-6 col-md-12 email">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email address"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Enter email address'"
        />
      </div>
    </div>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        id="subject"
        placeholder="Subject"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Subject'"
      />
    </div>
    <div className="form-group">
      <textarea
        className="form-control mb-10"
        rows={5}
        name="message"
        placeholder="Messege"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Messege'"
        required
        defaultValue={""}
      />
    </div>
    <a href="#" className="primary-btn text-uppercase">
      Post Comment
    </a>
  </form>
</div>

      </div>
    )
  }
}

export default postComment
