import { useState } from "react";

const EditableField = ({ value, name, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="editable-field">
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
          aria-label="Edit field"
        />
      ) : (
        <div onClick={handleClick}>{value || <span className="placeholder">Edit</span>}</div>
      )}
    </div>
  );
};

export default EditableField;
