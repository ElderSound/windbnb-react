import React, { useState } from 'react'

export default function ModalFinder({ onShowLocation, onShowContador, selectedLocation, setselectedLocation, guestCount, onSearch }) {

    return (
        <nav id="contactForm"
            className=" md:flex  md:flex-2/3 md:items-center md:w-full md:m-auto md:border md:border-l-1 md:rounded-lg md:border-gray-200 md:shadow-sm">
            <div
                className="border md:w-full md:justify-between md:mx-auto md:border-none border-l-1 rounded-lg border-gray-200 shadow-sm md:shadow-none md:rounded-r-none md:flex md:items-center ">
                <div
                    className="flex flex-col md:mx-auto w-full h-full flex-grow md:flex-1 px-1  focus-within:rounded-t-lg md:focus-within:rounded-lg  focus-within:border-gray-400 focus-within:border-2">
                    <label htmlFor="modal-search-input" className="block text-sm font-semibold text-gray-600 pl-4 py-2">
                        LOCATION</label>
                    <input 
                    value={selectedLocation} 
                    onClick={(e) => { e.stopPropagation(); onShowLocation(true); }} 
                    onChange={(e) => setselectedLocation(e.target.value)}
                    placeholder="Add location" type="search" id="modal-search-input"
                    className="w-full h-full outline-none border-none bg-transparent appearance-none  pl-4 pb-4" />
                </div>
                <div
                    className="flex md:w-full md:px-auto md:mx-auto h-full w-full flex-col flex-grow md:flex-1 max-w-1xl focus-within:rounded-b-lg md:focus-within:rounded-lg md:border-t-none border-t-1 md:border-t-0 border-gray-200  focus-within:border-2 focus-within:border-gray-400">
                    <label htmlFor="modal-guest-input"
                        className="block text-sm font-semibold text-gray-600 pl-4 py-2">GUESTS</label>
                    <input onClick={(e) => { e.stopPropagation(); onShowContador(true); }} 
                    value={
                        guestCount.adults + guestCount.children > 0? `${guestCount.adults + guestCount.children} guest(s)`: ''} readOnly  placeholder="Add guests" type="search" id="modal-guest-input"
                        className=" relative w-full h-full mt-1  outline-none border-none bg-transparent appearance-none pl-4 pb-4" />
                </div>
            </div>
            {/* <!-- BOTON Modal--> */}
            <div className="md:w-full md:flex md:flex-1/3 md:px-auto md:mx-auto flex-growflex-grow">
                <button onClick={onSearch}  type="button" className="w-27 h-8 flex left-1/2 -translate-x-1/2 md:translate-x-0 transform md:transform-none absolute md:static bottom-5 items-center space-x-2 p-4 bg-[#eb5757] text-white rounded-xl m-auto hover:bg-red-400 transition duration-300 mt-auto" id="search-modal-button">
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    &nbsp;&nbsp;search
                </button>
            </div>

        </nav>
    )
}
