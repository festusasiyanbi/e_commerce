import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "./context/DataProvider";

const SignIn = () => {

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(DataContext);
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const userInfo = JSON.parse(localStorage.getItem("users"));
  const username = userInfo.username;
  const password = userInfo.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === username && pwd === password) {
      setUser('')
      setPwd('')
      setErrMsg('')
      navigate("/")
      setIsLoggedIn(true);
    } else if(user === username && pwd !== password) {
      setErrMsg("Invalid password")
    } else if(user !== username && pwd === password) {
      setErrMsg("Invalid username")
    } else if(user !== username && pwd !== password) {
      setErrMsg("Invalid username and password")
    } 
  }

  return (
    <div className="signinform">
    <h2 style={{ color: 'black'}}>Sign <span style={{ color: 'limegreen'}}>In</span></h2>
      <form onSubmit={handleSubmit}>
        {errMsg ? <p className="errmsg">{errMsg}</p> : ""}
          <input 
            id="username"
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input 
            id="password"
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <button type="submit"> Sign in </button>
          <div className="line"> New user? <br /> <Link to="/signup"> Sign Up </Link> </div>
      </form>
    </div>
  )
}

export default SignIn;
