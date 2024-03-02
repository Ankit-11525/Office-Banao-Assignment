import React,{useState,useEffect} from 'react'

const Work = ({key,Work,Prev}) => {
    const [tick,setTick] = useState(Prev);
    useEffect(() => (
        setTick(Prev)
    ),[Prev])
    return (
        <div key={key} className='w-full flex-col gap-4 border-b-1'>
            <div className='w-full flex items-center gap-4 py-2'>
                <div className='ml-[40px] w-[25px] h-[25px] border-l-2 border-b-2 relative top-[-12px] right-[-24px]'>

                </div>
                <div className='min-w-[50px] flex items-center justify-center'>
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 shadow rounded dark:bg-gray-700 dark:border-gray-600"
                        checked={tick}
                        onChange={() => setTick(!tick)}
                    />
                </div>
                <div className='min-w-[300px] flex-1'>
                    {Work.title}
                </div>
                <div className='min-w-[250px]'>
                    {Work.rate}
                </div>
                <div className='min-w-[250px]'>
                    {Work.price}
                </div>
                <div className='w-[50px]'>
                </div>
            </div>
        </div>
    )
}

export default Work