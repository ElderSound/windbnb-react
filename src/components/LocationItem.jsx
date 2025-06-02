import React from 'react'

export default function LocationItem({ item, onSelectLocation }) {
  const handleClick = () => {
    onSelectLocation(`${item.city}, ${item.country}`);
  };
  return (
    <li onClick={handleClick} className="p-1 my-2 flex items-center space-x-2 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4B5563" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <span>{item.city}, {item.country}</span>
    </li>
  )
}
