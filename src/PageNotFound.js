import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
        <h3>404: Page not Found</h3>
        <p>Well, that's quite disappointing.</p>
        <p><Link to='/'>Visit our homepage</Link></p>
    </div>
  )
}

export default PageNotFound;
