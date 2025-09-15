import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
function MainNavbar() {
  return (
    <div className="navbar-main ">
      <div className="container">
        <div className="navbar-main-content d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src="logo.png" className="img-fluid" alt="" />
          </div>
          <div className="search-bar">
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
            </select>
            <input type="text" placeholder="Search..." />
            <button>
              {" "}
              <FaSearch size={25} color="gray" />{" "}
            </button>
          </div>
          <div className="user-actions d-flex align-items-center">
            <button className="login-btn">
              <div>
                <FaUser size={30} color="black" />
              </div>
              <div>Login</div>
            </button>
            <button className="cart-btn">
              {" "}
              <div>
                <FaShoppingCart size={30} color="green" />
              </div>
              <div>Cart (0)</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainNavbar;
