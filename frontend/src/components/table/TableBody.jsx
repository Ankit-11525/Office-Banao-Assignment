import React from 'react'
import Package from './Package';


const TableBody = ({Packages,Prev}) => {
    return (
        <div className='h-full'>
          {Packages.map((P, index) => (
              <Package key={index} Package={P} Prev={Prev}/>
          ))}
        </div>
    )
}

export default TableBody