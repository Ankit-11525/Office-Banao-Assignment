import React, { useState } from "react";
import Civil from "../Components/Civil";
const OverviewTab = () => {
  const [ismainCheckbox, setIsMainCheckBox] = useState(false);
  const [packageChecked, setPackageChecked] = useState([]);
  const packages = [
    {
      packagename: "civil 1",
      rate: "2552",
      total: "100",
    },
    {
      packagename: "civil 1",
      rate: "2552",
      total: "100",
    },
    {
      packagename: "civil 1",
      rate: "2552",
      total: "100",
    },
    {
      packagename: "civil 1",
      rate: "2552",
      total: "100",
    },
  ];

  const handleMainCheckbox = (e) => {
    const isChecked = e.target.checked;
    setIsMainCheckBox(isChecked);
    if (isChecked) {
      setPackageChecked(packages.map(() => true));
    } else {
      setPackageChecked(packages.map(() => false));
    }
  };

  const handlePackageCheckboxChange = (index, isChecked) => {
    const updatedpackageChecked = [...packageChecked];
    updatedpackageChecked[index] = isChecked;
    setPackageChecked(updatedpackageChecked);
    setIsMainCheckBox(updatedpackageChecked.every((isChecked) => isChecked));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={ismainCheckbox}
            onChange={handleMainCheckbox}
          />
        </label>
      </div>

      <div>
      <ul>
          {packages.map((onepackage, index) => (
            <li key={index} >
              <div className="flex flex-row ">
              <label>
                <input
                  type="checkbox"
                  checked={packageChecked[index] || false}
                  onChange={(e) =>
                    handlePackageCheckboxChange(index, e.target.checked)
                  }
                />
              </label>
              <Civil civilchecked={packageChecked[index]} civilindex={index} civilName={onepackage.packagename} civilRate={onepackage.rate} civilTotal={onepackage.total} handlePackageCheckboxChange={handlePackageCheckboxChange}/>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OverviewTab;
