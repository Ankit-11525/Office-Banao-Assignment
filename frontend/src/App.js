import React, { useState } from "react";
import Navbar from "./Components/Navbar.js";
import OverviewTab from "./Tabs/OverviewTab.js";
import OtherTab from "./Tabs/OtherTab.js";
const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <OverviewTab/>
        <OtherTab />
      </div>
    </div>
  );
};

export default App;
