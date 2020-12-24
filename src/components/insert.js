import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { editUser, insertUser } from "../redux/crud/crudActions";

const InsertUser = (props) => {
  const history = useHistory();

  // console.log(history.location.state)
  const initialState = {
    user_name: "",
    email: "",
    phone_no: "",
    password: "",
    title: props.title,
    addUser: props.addUser,
    editUser: props.editUser,
    userarr: history.location.state,
  };

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNoRef = useRef(null);
  const passRef = useRef(null);
  const submitRef = useRef(null);

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    userNameRef.current.focus();
    if (user.title === "Update") {
      setUser({
        ...user,
        user_name: user.userarr.user.user_name,
        email: user.userarr.user.email,
        phone_no: user.userarr.user.phone_no,
        password: user.userarr.user.password,
      });
      //passRef.current.setAttribute("disabled", true);
    }
  }, [user]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyUp = (e, target) => {
    if (e.keyCode === 13) {
      switch (target) {
        case "userName":
          emailRef.current.focus();
          break;
        case "email":
          phoneNoRef.current.focus();
          break;
        case "phoneNo":
          passRef.current.focus();
          break;
        case "password":
          submitRef.current.focus();
          break;
        default:
          userNameRef.current.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userNameRef.current);
    if (user.title === "Insert") {
      user.addUser(user);
      setUser({
        ...user,
        user_name: "",
        email: "",
        phone_no: "",
        password: "",
      });
    } else {
      //console.log(user.userarr.user.user_id);
      user.editUser(user, user.userarr.user.user_id);
      setUser({
        ...user,
        user_name: "",
        email: "",
        phone_no: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <h2>{user.title} Form</h2>
      <div className="col-6 offset-md-3 mt-5">
        <input
          className="form-control"
          type="text"
          ref={userNameRef}
          onKeyUp={(e) => handleKeyUp(e, "userName")}
          name="user_name"
          placeholder="Enter User Name"
          value={user.user_name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          className="form-control"
          type="email"
          ref={emailRef}
          onKeyUp={(e) => handleKeyUp(e, "email")}
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          className="form-control"
          type="text"
          ref={phoneNoRef}
          onKeyUp={(e) => handleKeyUp(e, "phoneNo")}
          name="phone_no"
          placeholder="Enter Mobile Number"
          value={user.phone_no}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          className="form-control"
          type="password"
          ref={passRef}
          onKeyUp={(e) => handleKeyUp(e, "password")}
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button
          type="button"
          ref={submitRef}
          className="btn btn-primary"
          onClick={(e) => {
            handleSubmit(e);
            history.push("/");
          }}
        >
          {/* <Link to="/" style={{color: "white", textDecoration: "none"}}> */}
          {user.title}
          {/* </Link> */}
        </button>
        <Link to="/">
          <button type="button" className="btn btn-primary ml-3">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(insertUser(user)),
    editUser: (user, user_id) => dispatch(editUser(user, user_id)),
  };
};

export default connect(null, mapDispatchToProps)(InsertUser);
