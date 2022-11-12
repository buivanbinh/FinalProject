import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import Head from "./Head";
import "./Header.css";
import Sub from "./sub"

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <>
      <Head />
      <Search cart={cart} />
      <div className="custom">
        <div className='catgrories d'>
          <span class='fa-solid fa-border-all'></span>
          <h4>
            Categories <i className='fa fa-chevron-down'></i>
          </h4>
        </div>
        <Sub
          handleClick={handleClick}
          logout={logout}
          user={user}
          current={current}
        />
      </div>
    </>

  );
};

export default Header;
