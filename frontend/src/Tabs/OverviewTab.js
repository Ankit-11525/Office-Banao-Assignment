import React from "react";
import PointWithSubpoints from '../Components/PointWithSubpoints.js';

const OverviewTab = () => {
  return (
    <div>
      <PointWithSubpoints
        point="Main Point 1"
        subpoints={["Subpoint 1.1", "Subpoint 1.2", "Subpoint 1.3"]}
      />
      <PointWithSubpoints
        point="Main Point 2"
        subpoints={["Subpoint 2.1", "Subpoint 2.2"]}
      />
    </div>
  );
};

export default OverviewTab;
