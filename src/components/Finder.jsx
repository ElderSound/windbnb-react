import React from 'react'

export default function Finder({onShowModal, city, guests}) {
  return (
     <nav onClick={() => onShowModal(true)} className="flex gap-4 h-15 items-center shadow-sm mx-5 md:mx-0 rounded-xl w-full md:max-w-[350px] m-auto"
            id="nav-modal">
            <div className="flex  h-9 items-center flex-grow max-w-1xl rounded-md px-1 ">

                <input value={city} placeholder="Add location" type="search" className="w-full h-full text-center outline-none border-none bg-transparent " readOnly/>
            </div>
            <div className="flex  h-15 items-center flex-grow max-w-1xl  px-1 border-r-1 border-l-1 border-gray-100   ">

                <input value={guests ? `${guests} guest(s)` : ''} placeholder="Add guests" type="search"
                    className="w-full h-full text-center  outline-none border-none bg-transparent appearance-none" readOnly/>
            </div>
            <button className=" h-9 pr-4 m-auto rounded-md  cursor-pointer" id="search-button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        stroke="#eb5757" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
</button>
        </nav>
  )
}
