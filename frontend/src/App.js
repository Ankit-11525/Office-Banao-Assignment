import React, { useState } from "react";
import Navbar from "./Components/Navbar.js";
import OverviewTab from "./Tabs/OverviewTab.js";
import OtherTab from "./Tabs/OtherTab.js";

const App = () => {
  const [tab, setTab] = useState(0);
 
  return (
    <div>
      <Navbar />
      <div className="flex flex-row px-4">
        <div
          className={`m-2 ${tab===0 ? "text-black border-black" : "text-gray-500 border-grey"} text-lg px-20 cursor-pointer border-b-2`}
          onClick={() => {
            setTab(0);
          }}
        >
          Overview
        </div>


        <div
          className={`m-2 text-lg px-20 cursor-pointer border-b-2 ${tab===1 ? "text-black border-black" : "text-gray-500 border-grey"}`}
          onClick={() => {
            setTab(1);
          }}
        >
          Other
        </div>
      </div>




      <div>
        {tab === 0 && <OverviewTab />}
        {tab === 1 && <OtherTab />}
      </div>
    </div>
  );
};

export default App;
