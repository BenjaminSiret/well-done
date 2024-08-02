import { useState } from "react";

const EditableField = ({ value, name, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="editable-field">
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.name, e.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <div onClick={() => setIsEditing(true)}>
          {value || <span className="placeholder">Edit</span>}
        </div>
      )}
    </div>
  );
};

export default EditableField;
