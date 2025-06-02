import React from 'react'

export default function Cards({ type, photo, beds, title, rating, superHost}) {
    const bedsText = beds ? `.${beds} beds` : null;
    
    return (
        <li className="flex flex-col overflow-hidden w-full pb-4 md:text-xs">
            <figure className="w-full overflow-hidden h-60 rounded-lg">
                <img src={photo} alt={type} className="w-full h-full object-cover rounded-lg block " />
            </figure >
            <div aria-label="card content" className="flex justify-between py-4 px-1 flex-grow ">
                <div className="flex items-center space-x-1">
                    {superHost && (
                        <span className=" text-gray-600 font-bold border border-gray-600 px-1 py-1 rounded-full lg:text-xs">SUPERHOST</span>
                    )}
                    
                    <h3 className="text-gray-600 text-xl md:text-xs font-semibold">{type}
                        <span className="newBed">{bedsText}</span>
                    </h3>
                </div>
                <span className=" flex items-center space-x-2 pl-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#eb5757" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    {rating}
</span>
            </div>
            <p className="text-gray-900 font-bold relative px-2">
                <span>{title}</span>
            </p>
        </li>
    )
}
