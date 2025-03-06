import './Button.css';

export default function Button({ type = 'button', isPrimary = false, text }) {
  return (
    <button className={`btn ${isPrimary ? 'primary-btn' : ''}`}>{text}</button>
  );
}
