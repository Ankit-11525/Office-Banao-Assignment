import React, { useState } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

const Packages = [
  {
    title:'Civil 1',
    rate: 567.80,
    price: '29,86,792',
    curLevel: false,
    nextLevel: false,
    Activities: [
      {
        title:'Activity 1',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 2',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 3',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 4',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
    ]
  },
  {
    title:'Civil 2',
    rate: 567.80,
    price: '29,86,792',
    curLevel: false,
    nextLevel: false,
    Activities: [
      {
        title:'Activity 1',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 2',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 3',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 4',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
    ]
  },
  {
    title:'Civil 3',
    rate: 567.80,
    price: '29,86,792',
    curLevel: false,
    nextLevel: false,
    Activities: [
      {
        title:'Activity 1',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 2',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 3',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 4',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
    ]
  },
  {
    title:'Civil 4',
    rate: 567.80,
    price: '29,86,792',
    curLevel: false,
    nextLevel: false,
    Activities: [
      {
        title:'Activity 1',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 2',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 3',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 4',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
    ]
  },
  {
    title:'Civil 5',
    rate: 567.80,
    price: '29,86,792',
    curLevel: false,
    nextLevel: false,
    Activities: [
      {
        title:'Activity 1',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 2',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 3',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
      {
        title:'Activity 4',
        rate: 567.80,
        price: '29,86,792',
        curLevel: false,
        nextLevel: false,
        Works: [
          {
            title:'Work Item 1',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 2',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
          {
            title:'Work Item 3',
            rate: 567.80,
            price: '29,86,792',
            curLevel: false,
          },
        ]
      },
    ]
  },
]

const Table = () => {
  const [tick,setTick]=useState(false);
  return (
    <div className='w-full h-full my-6 border-2'>
        <TableHead setTick={setTick}/>
        <TableBody Packages={Packages} Prev={tick} />
    </div>
  )
}

export default Table