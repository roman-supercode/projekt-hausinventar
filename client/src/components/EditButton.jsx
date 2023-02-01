import { Link } from "react-router-dom";

const EditButton = ({ id }) => {
  return (
    <Link to={`/edit/${id}`}>
      <button type="button">
        Edit
      </button>
    </Link>
  );
};
export default EditButton;