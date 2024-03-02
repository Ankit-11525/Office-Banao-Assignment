import React from 'react'

const WorkItem = ({WorkItemName,total}) => {
  return (
    <div className=' w-full flex flex-row justify-between '>
      <div>{WorkItemName}</div>
      <div>{total}</div>
    </div>
  )
}

export default WorkItem