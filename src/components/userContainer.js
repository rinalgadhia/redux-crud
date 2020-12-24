import React from "react"
import { Link } from "react-router-dom";
import UserDetails  from "./userDetails"

const UserContainer = () => {
    return (
      <div>
        <div className="jumbotron text-white h1 bg-info">
          <span>User Details</span>
          <Link to="/insert">
            <button className="btn btn-light float-right mr-5">Add New</button>
          </Link>
        </div>
        <UserDetails />
      </div>
    );
}
 
export default UserContainer;