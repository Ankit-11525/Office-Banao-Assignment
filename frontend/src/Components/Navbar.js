import Button from "@mui/material/Button";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const buttonStyle = {
    fontSize: '18px',
    padding: '8px 45px',
    margin: '5px',
  };
  return (
    <div>
      <div className="flex justify-between m-5 ">
        <div className="flex flex-row justify-between items-center p-1">
          <FontAwesomeIcon icon={faLessThan} />
          <div className="mx-8 text-lg">Create Workorder</div>
        </div>

        <Button variant="contained" style={buttonStyle}>Save</Button>
      </div>
    </div>
  );
};

export default Navbar;
