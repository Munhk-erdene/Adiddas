import { Link } from "react-router-dom";
import "../App.css";
import Logo from "./Logo";
import { useState } from "react";
import Login from "../Router/Login";
const Header = () => {
  const [displayLogin, setdisplayLogin] = useState({
    display: "none",
    isDisplay: false,
  });
  const loginPage = () => {
    if (displayLogin.isDisplay === false) {
      setdisplayLogin({ display: "inline", isDisplay: true });
    } else {
      setdisplayLogin({ display: "none", isDisplay: false });
    }
  };
  return (
    <>
      <div className="header">
        <div>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        <div className="mainHeader">
          <Link
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
            }}
            to="./Man"
          >
            {" "}
            <div>MEN </div>
          </Link>
          <Link
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
            }}
            to="./Woman"
          >
            {" "}
            <div>WOMAN </div>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
            }}
            to="./Kids"
          >
            {" "}
            <div>KIDS </div>
          </Link>
          <div>SALE </div>
          <div>3 SRTRIPE LIFE</div>
        </div>
        <div className="rightHeader">
          <div className="rightHeaderDiv">
            <div>help</div>
            <div>exchanges & returns</div>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginTop: "10px",
              }}
              to="/Admin"
            >
              <div>are you admin?</div>
            </Link>
            <div>join adiclub</div>
          </div>
          <div className="rightHeaderDiv">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                style={{
                  border: "none",
                  width: "11vw",
                  backgroundColor: "#ECEFF1",
                  height: 30,
                  padding: 5,
                }}
              />
            </div>
            <div>
              <svg
                onClick={loginPage}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </div>
            <div>
              <Link to="./WishList">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="\"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Link>
            </div>
            <div>
              <Link to="/Bag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <Login value={displayLogin.display} />
      </div>
    </>
  );
};
export default Header;
