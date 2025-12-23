import "./Alert.css";

function Alert({ message, type, onClose }) {
  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>✖</button>
    </div>
  );
}

export default Alert;
