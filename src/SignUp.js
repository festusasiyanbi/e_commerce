import { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimes, FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const SignUp = () => {

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatchPwd(pwd === matchPwd)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid entry")
            return;
        } else {
            let userInfo = {
                username: user,
                password: pwd
            }
            localStorage.setItem('users', JSON.stringify(userInfo));
            setSuccess(true);
            setUser('')
            setPwd('')
            setMatchPwd('')
        }
    }
  return (
    <div className="signupform">
        <h2 style={{ color: 'black'}}>Sign <span style={{ color: 'limegreen'}}>Up</span></h2>
        <form onSubmit={handleSubmit}>
            { success ? 
                <p  className='success'><span>Success! </span><br /> <Link to="/signin">Sign in</Link></p> :
            <>
            <div className="userdiv">
                <input 
                    type="text"
                    id="user"
                    placeholder="Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <FaCheckCircle className={validName ? "valid" : "hide"}/>
                <FaTimes className={validName || !user ? "hide" : "invalid"} />
            </div>
            <div className="pwddiv">
                <input 
                    type="password"
                    id="pwd"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <FaCheckCircle className={validPwd ? "valid" : "hide"}/>
                <FaTimes className={validPwd || !pwd ? "hide" : "invalid"} />
            </div>
            <div className="confirm_pwddiv">
                <input 
                    type="password"
                    id="confirm_pwd"
                    placeholder="Confirm password"
                    value={matchPwd}
                    onChange={(e) => setMatchPwd(e.target.value)}
                />
                <FaCheckCircle className={validMatchPwd && matchPwd ? "valid" : "hide"} />
                <FaTimes className={validMatchPwd || !matchPwd ? "hide" : "invalid"} />
            </div>
            <div className='button'>
                <button type='submit'> Sign up</button>
            </div>
            
            <div className='line'>
                <p>Already registered? </p>
                <Link to="signin">Sign in</Link>
            </div>
            </>
            }
        </form>
    </div>
  )
}

export default SignUp;
