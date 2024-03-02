import React, { useState, useEffect } from "react";
import Activity from "./Activity";

const Civil = ({
  civilchecked,
  civilindex,
  civilName,
  civilRate,
  civilTotal,
  handlePackageCheckboxChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activityChecked, setActivityChecked] = useState([]);
  const initializeArray = (length) => {
    const newArray = Array.from({ length }, () => false);
    setActivityChecked(newArray);
  };
  const Activities = [
    {
      activityname: "activity 1",
      rate: "2552",
      total: "100",
    },
    {
      activityname: "activity 2",
      rate: "2564",
      total: "100",
    },
    {
      activityname: "activity 3",
      rate: "7894",
      total: "100",
    },
    {
      activityname: "activity 4",
      rate: "56465",
      total: "100",
    },
  ];
  useEffect(() => {
    initializeArray(4);
  }, [civilchecked]);
  const handleActivityCheckboxChange = (index, isChecked) => {
    const updatedActivityChecked = [...activityChecked];
    updatedActivityChecked[index] = isChecked;
    setActivityChecked(updatedActivityChecked);
    let allchecked = true;
    updatedActivityChecked.forEach((value) => {
      allchecked = allchecked & value;
    });
    // console.log("allchecked : ",{index},allchecked,":",isChecked);
    handlePackageCheckboxChange(civilindex, allchecked);
  };
  const toggleSubpointsVisibility = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-around">
        <div>{civilName}</div>
        <div>{civilRate}</div>
        <div>{civilTotal}</div>
        <button onClick={toggleSubpointsVisibility}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <ul>
          {Activities.map((oneactivity, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={activityChecked[index] || false}
                  onChange={(e) =>
                  handleActivityCheckboxChange(index, e.target.checked)
                  }
                />
                <Activity
                activitychecked={activityChecked[index]}
                activityindex={index}
                activityName={oneactivity.activityname}
                activityRate={oneactivity.rate}
                activityTotal={oneactivity.total}
                handleActivityCheckboxChange={handleActivityCheckboxChange}
                />
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Civil;
