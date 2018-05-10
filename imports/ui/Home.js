import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="page-content page-home">
      <nav>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
