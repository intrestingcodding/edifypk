import React from 'react'
const Banner = (props) => {
    return (
        <div className='grid md:grid-cols-2 py-5 justify-center  items-center mb-5'>
            <div className="">
                <span className='text-blue-600 md:text-base text-sm font-medium md:font-semibold mb-1 block'>{props.span}</span>
                <h3 className='md:text-3xl  text-2xl mb-1 font-semibold'>{props.heading}</h3>
            </div>
            <div className="md:pl-8">
                <p className='text-[#808080] md:text-base text-sm '>{props.para}</p>
            </div>
        </div>
    )
}

export default Banner