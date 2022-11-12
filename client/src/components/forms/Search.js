import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"
import logo from "../../components/assets/images/logo.svg"

const Search = ({cart}) => {

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <>
      <section className='search'>
        <div className='container c'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f'>
            <i className='fa fa-search'></i>
            <form onSubmit={handleSubmit}>
              <input 
                type="search"
                placeholder='Search and hit enter...' 
                onChange={handleChange}
                value={text}
              />
            </form>
            <span>All Category</span>
          </div>

          <div className='icon f width'>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{cart.length === 0 ? "" : cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
    // <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
    //   <input
    //     onChange={handleChange}
    //     type="search"
    //     value={text}
    //     className="form-control mr-sm-2"
    //     placeholder="Search"
    //   />
    //   <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} />
    // </form>
  );
};

export default Search;
