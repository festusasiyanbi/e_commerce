import { AiFillCaretUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Authentication = ({ showAuthentication, setShowAuthentication }) => {

    const handleClick = () => {
        setShowAuthentication(false)
    }
    
    return (
        <div className="authentication">
            <span className='caret-up'><AiFillCaretUp /> </span>
            <Link to="/signin" onClick={handleClick}> Sign in </Link>
            <Link to="/signup" onClick={handleClick}> Sign up </Link>
        </div>
    )
}

export default Authentication;
