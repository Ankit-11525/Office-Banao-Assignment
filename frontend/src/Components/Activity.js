import React, { useState, useEffect } from "react";
import WorkItem from "./WorkItems";
const Activity = ({
  activitychecked,
  activityindex,
  activityName,
  activityRate,
  activityTotal,
  handleActivityCheckboxChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [WorkItemChecked, setWorkItemChecked] = useState([]);
  const initializeArray = (length) => {
    const newArray = Array.from({ length }, () => false);
    setWorkItemChecked(newArray);
  };
  const WorkItems = [
    {
      WorkItemname: "WorkItem 1",
      rate: "2552",
      total: "100",
    },
    {
      WorkItemname: "WorkItemn 2",
      rate: "2552",
      total: "100",
    },
    {
      WorkItemname: "WorkItemn 3",
      rate: "2552",
      total: "100",
    }
  ];
  useEffect(() => {
    initializeArray(3);
  }, []);
  const handleWorkItemCheckboxChange = (index, isChecked) => {
    const updatedWorkItemChecked = [...WorkItemChecked];
    updatedWorkItemChecked[index] = isChecked;
    setWorkItemChecked(updatedWorkItemChecked);
    let allchecked = true;
    updatedWorkItemChecked.forEach((value) => {
      allchecked = allchecked & value;
    });
    // console.log("allchecked : ",{index},allchecked,":",isChecked);
    handleActivityCheckboxChange(activityindex, allchecked);
  };
  const toggleSubpointsVisibility = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className=" flex flex-row justify-between">
        <div>{activityName}</div>
        <div>{activityRate}</div>
        <div>{activityTotal}</div>
        <button onClick={toggleSubpointsVisibility}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col ">
          {WorkItems.map((oneWorkItem, index) => (
            <div key={index} className="w-full flex flex-row  my-4 mx-8">
              <label>
                <input
                  type="checkbox"
                  checked={WorkItemChecked[index] || false}
                  onChange={(e) =>
                    handleWorkItemCheckboxChange(index, e.target.checked)
                  }
                />
                
              </label>
              <WorkItem WorkItemName={oneWorkItem.WorkItemname} total={oneWorkItem.total}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Activity;
