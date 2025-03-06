import './User.css';
import userSVG from '../../assets/user.svg';
import { useState } from 'react';

export default function User() {
  const [isVisible, setIsVisible] = useState(false);
  const onClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="user-wrapper">
      <button className="user" onClick={onClick}>
        <img src={userSVG} alt="User avatar" />
        <p className="user__name">John Doe</p>
      </button>
      <div className="user-menu" data-visible={isVisible}>
        <div className="divider"></div>
        <ul>
          <li>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M9 12h12l-3 -3" />
                <path d="M18 15l3 -3" />
              </svg>
              <span>Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
