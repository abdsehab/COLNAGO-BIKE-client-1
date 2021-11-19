// import { useState } from 'react';
import "./Dashboard.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import useFirebase from '../../Hooks/useFirebase.js';
import MyOrder from "./MyOrder.js";
import Payment from "./Payment.js";
import Reviews from "./Reviews.js";
import ManageAllOrder from "./ManageAllOrder.js";
import MakeAdmin from "./MakeAdmin.js";
import AddProduct from "./AddProduct.js";
import useAuth from "../../Hooks/useAuth.js";
import { useEffect, useState } from "react";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const [userInfo, setUser] = useState({});
  // const { user } = useFirebase();
  const { allContexts } = useAuth();
  const { logOut, user } = allContexts;
  const { email } = user;

  useEffect(() => {
    fetch(`http://localhost:5000/getuser/${email}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [email]);

  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>User Dashboard</h5>

              {userInfo?.role !== "admin" && (
                <Link to={`${url}`}>
                  <li className="dashboard-menu mt-5">My Order</li>
                </Link>
              )}
              {userInfo?.role !== "admin" && (
                <Link to={`${url}/payment`}>
                  <li className="dashboard-menu">Payment</li>
                </Link>
              )}

              {userInfo?.role !== "admin" && (
                <Link to={`${url}/reviews`}>
                  <li className="dashboard-menu">Reviews</li>
                </Link>
              )}

              <div className="admin-dashboard">
                {userInfo?.role === "admin" && (
                  <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu">Add A Product</li>
                  </Link>
                )}

                {userInfo?.role === "admin" && (
                  <Link to={`${url}/makeAdmin`}>
                    <li className="dashboard-menu">Make Admin</li>
                  </Link>
                )}
                {userInfo?.role === "admin" && (
                  <Link to={`${url}/ManageAllOrder`}>
                    <li className="dashboard-menu">Manage All Orders</li>
                  </Link>
                )}

                <button onClick={logOut} className="btn-style mt-5">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route exact path={`${path}/reviews`}>
                <Reviews></Reviews>
              </Route>
              <Route exact path={`${path}/ManageAllOrder`}>
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
