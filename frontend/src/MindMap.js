import React, { useState } from 'react';

const MindMap = ({ points }) => {
  return (
    <div className="flex">
      {points.map(point => (
        <Point key={point.id} point={point} />
      ))}
    </div>
  );
};

const Point = ({ point }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    toggleCheckSubpoints(!isChecked);
  };

  const toggleCheckSubpoints = (checked) => {
    point.subpoints && point.subpoints.forEach(subpoint => {
      subpoint.isChecked = checked;
      subpoint.subpoints && subpoint.subpoints.forEach(subsubpoint => {
        subsubpoint.isChecked = checked;
      });
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <label className="inline-flex items-center">
          <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className="form-checkbox h-5 w-5 text-gray-600" />
          <span className="ml-2">{point.name}</span>
        </label>
        {point.subpoints && (
          <button onClick={toggleExpand} className="ml-2">{isExpanded ? '-' : '+'}</button>
        )}
      </div>
      {point.subpoints && isExpanded && (
        <ul className="ml-8">
          {point.subpoints.map(subpoint => (
            <li key={subpoint.id}>
              <SubPoint subpoint={subpoint} />
            </li>
          ))}
        </ul>
      )}
      {point.subpoints && isExpanded && (
        <div className="line-vertical h-full w-px bg-gray-400 ml-4"></div>
      )}
    </div>
  );
};

const SubPoint = ({ subpoint }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    toggleCheckSubpoints(!isChecked);
  };

  const toggleCheckSubpoints = (checked) => {
    subpoint.subpoints && subpoint.subpoints.forEach(subsubpoint => {
      subsubpoint.isChecked = checked;
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <label className="inline-flex items-center">
          <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className="form-checkbox h-5 w-5 text-gray-600" />
          <span className="ml-2">{subpoint.name}</span>
        </label>
        {subpoint.subpoints && (
          <button onClick={toggleExpand} className="ml-2">{isExpanded ? '-' : '+'}</button>
        )}
      </div>
      {subpoint.subpoints && isExpanded && (
        <ul className="ml-8">
          {subpoint.subpoints.map(subsubpoint => (
            <li key={subsubpoint.id}>
              <SubSubPoint subsubpoint={subsubpoint} />
            </li>
          ))}
        </ul>
      )}
      {subpoint.subpoints && isExpanded && (
        <div className="line-horizontal w-4 h-px bg-gray-400 ml-4"></div>
      )}
    </div>
  );
};

const SubSubPoint = ({ subsubpoint }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <label className="inline-flex items-center">
        <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className="form-checkbox h-5 w-5 text-gray-600" />
        <span className="ml-2">{subsubpoint.name}</span>
      </label>
    </div>
  );
};

export default MindMap;
