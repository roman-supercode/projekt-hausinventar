import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/" className="backButton link">
      ⬅️
    </Link >
  );
};
export default BackButton;