import React, { useEffect } from "react";
import { fetchUsers } from "../redux/users/userActions";
import { deleteUser } from "../redux/crud/crudActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
// import { Spinner } from "react-bootstrap";

function UserDetails({ userData, fetchUsers, deleteUser }) {
  const history = useHistory();

  useEffect(() => {
    fetchUsers();    
  }, [fetchUsers]);

  const editHandler = (e, user) => {
    e.preventDefault();
    history.push({
      pathname: "/edit",
      state: {
        user: user,
      },
    });
  };

  const deleteHandler = (id) => {
    deleteUser(id);
  };

  return userData.loading ? (
    <h1>
      {/* <Spinner animation="border" /> */}
      <img src="spinner.gif" alt="Loading..." />
    </h1>
  ) : userData.error ? (
    <h3>{userData.error}</h3>
  ) : (
    <div>
      {/* <div className="jumbotron text-white h1 bg-info">
        <span>User Details</span>
        <Link to="/insert">
          <button className="btn btn-light float-right mr-5">Add New</button>
        </Link>
      </div> */}
      <table className="table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
          userData.users.map((user) => (
            <tr id={"row" + user.user_id} key={user.user_id}>
              <td>{user.user_name}</td>
              <td>{user.email}</td>
              <td>{user.phone_no}</td>
              <td>
                <button
                  className="btn btn-info mr-3"
                  onClick={(e) => editHandler(e, user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    let cnfirm = window.confirm(
                      "Are you sure you want to delete this record?"
                    );
                    if (cnfirm) {
                      deleteHandler(user.user_id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
