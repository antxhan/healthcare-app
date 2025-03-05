import './User.css';
import userSVG from '../../assets/user.svg';

export default function User() {
  return (
    <button className="user">
      <img src={userSVG} alt="User avatar" />
      <p className="user__name">John Doe</p>
    </button>
  );
}
