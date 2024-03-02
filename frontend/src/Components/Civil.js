import React,{ useState } from "react";

const Civil = ({ civilchecked ,civilindex, civilName, civilRate, civilTotal,handlePackageCheckboxChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activityChecked, setActivityChecked] = useState([]);
  const Activities = [
    {
      activityname: "activity 1",
      rate: "2552",
      total: "100",
    },
    {
      activityname: "activity 1",
      rate: "2552",
      total: "100",
    },
    {
      activityname: "activity 1",
      rate: "2552",
      total: "100",
    },
    {
      activityname: "activity 1",
      rate: "2552",
      total: "100",
    },
  ];
  const handleCivilCheckbox = () => {
    const isChecked =civilchecked;
    if (isChecked) {
      setActivityChecked(Activities.map(() => true));
    } else {
      setActivityChecked(Activities.map(() => false));
    }
  };
  const handleActivityCheckboxChange = (index, isChecked) => {
    const updatedActivityChecked = [...activityChecked];
    updatedActivityChecked[index] = isChecked;
    setActivityChecked(updatedActivityChecked);
    const allchecked=(updatedActivityChecked.every((isChecked) => isChecked));
    handlePackageCheckboxChange(civilindex,allchecked);
  };
  const toggleSubpointsVisibility = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="w-full flex flex-row justify-between">
        <div>{civilName}</div>
        <div>{civilRate}</div>
        <div>{civilTotal}</div>
        <button onClick={toggleSubpointsVisibility}>
        {isOpen ? '-' : '+'}
      </button>
      </div>
      {isOpen && (
        <ul>
          {Activities.map((activity, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={activityChecked[index] || false}
                  onChange={(e) =>
                    handleActivityCheckboxChange(index, e.target.checked)
                  }
                />
                {activity.activityname}
              </label>
            </li>
          ))}
        </ul>
      )}



      
    </div>
  );
};

export default Civil;
