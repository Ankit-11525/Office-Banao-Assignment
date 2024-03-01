import React, { useState } from 'react';

const PointWithSubpoints = ({ point, subpoints }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [subpointsChecked, setSubpointsChecked] = useState([]);

  const handleMainCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setSubpointsChecked(subpoints.map(() => true));
    } else {
      setSubpointsChecked(subpoints.map(() => false));
    }
  };

  const handleSubpointCheckboxChange = (index, isChecked) => {
    const updatedSubpointsChecked = [...subpointsChecked];
    updatedSubpointsChecked[index] = isChecked;
    setSubpointsChecked(updatedSubpointsChecked);
    setIsChecked(updatedSubpointsChecked.every((isChecked) => isChecked));
  };

  const toggleSubpointsVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleMainCheckboxChange}
        />
        {point}
      </label>
      <button onClick={toggleSubpointsVisibility}>
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && (
        <ul>
          {subpoints.map((subpoint, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={subpointsChecked[index] || false}
                  onChange={(e) =>
                    handleSubpointCheckboxChange(index, e.target.checked)
                  }
                />
                {subpoint}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PointWithSubpoints;
