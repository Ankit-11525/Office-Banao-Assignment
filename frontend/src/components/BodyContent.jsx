import React,{useState} from 'react'
import Table from './table/Table'
import Other from './Other';

const BodyContent = () => {
    const [content,setContent] = useState('overview');
    return (
        <div className='px-8 pt-4 flex-col'>
            <div className='w-full flex items-center justify-start'>
                <div className={`w-[250px] font-semibold flex items-center justify-center py-2 border-b-2 border-black pointer ${content === 'overview' ? 'opacity-100' : 'opacity-20'}`}
                    onClick={()=>setContent('overview')}>
                    Overview
                </div>
                <div className={`w-[250px] font-semibold flex items-center justify-center py-2 border-b-2 border-black pointer ${content === 'other' ? ' opacity-100' : 'opacity-20'}`}
                    onClick={()=>setContent('other')}>
                    Other
                </div>
            </div>
            <div className='w-full h-full'>
                {content=='overview' && (
                    <Table />
                )}
                {content=='other' && (
                    <Other />
                )}
            </div>
        </div>
    )
}

export default BodyContent