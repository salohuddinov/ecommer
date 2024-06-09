import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import admin1 from '../../images/admin2.png'
import admin2 from '../../images/admin1.png'
import logout from '../../images/logout.svg'


const Admin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="admin">
      <div className="admin__panel">
        <div className="admin__panel__title">
          <NavLink to="/"> <HiArrowNarrowLeft className="admin__panel__title__p" /></NavLink>
          <p className="admin__panel__title__p">Admin Dashboard</p>
        </div>
        <div className="admin__panel__link">
          <NavLink className="admin__panel__link__item" to={"/admin/create-product"}><img src={admin1} alt="kndjs" /> Create product</NavLink>
          <NavLink className="admin__panel__link__item" to={"/admin/manage-products"}><img src={admin2} alt="kndjs" />Manage product</NavLink>
          <NavLink className="admin__panel__link__item" to={"/admin/create-category"}><img src={admin1} alt="kndjs" />Create category</NavLink>
          <NavLink className="admin__panel__link__item" to={"/admin/manage-category"}><img src={admin2} alt="kndjs" />Manage category</NavLink>
        </div>
        <button className="admin__panel__button" onClick={handleClick}><img src={logout} alt="" />Log out</button>
      </div>
      <div className="admin__item container">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
