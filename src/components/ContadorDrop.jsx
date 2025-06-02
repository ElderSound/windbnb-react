import React from 'react'

export default function ContadorDrop({ guestCount, setGuestCount }) {
    const handleChange = (type, delta) => {
        setGuestCount(prev => {
            const newValue = Math.max(0, prev[type] + delta);
            return { ...prev, [type]: newValue };
        });
    };
    return (
        <div className=" absolute h-full min-h-30 pl-4 md:left-1/2 md:-translate-x-1/2 md:transform"
            id="contador-modal">
            <div className=" py-3">
                <h3>Adults</h3>
                <p className="text-gray-300">Ages 13 or above</p>
                <div id="buttons-guest">
                    <button onClick={() => handleChange('adults', -1)} className="cursor-pointer bg-gray-100 border border-gray-400 rounded-md text-gray-600 px-2 "
                        value="-">-</button>
                    <span className="mx-5" id="display">{guestCount.adults}</span>
                    <button onClick={() => handleChange('adults', 1)}
                        className=" cursor-pointer mt-3 bg-gray-100 border border-gray-400 rounded-md text-gray-600 px-2 "
                        value="+">+</button>
                </div>
            </div>
            <div className=" py-3">
                <h3>Children</h3>
                <p className="text-gray-300">Ages 13 or below</p>
                <div id="buttons-guest-n">
                    <button onClick={() => handleChange('children', -1)} className="cursor-pointer bg-gray-100 border border-gray-400 rounded-md text-gray-600 px-2 "
                        value="-">-</button>
                    <span className="mx-5" id="display-n">{guestCount.children}</span>
                    <button
                        onClick={() => handleChange('children', 1)}
                        className="cursor-pointer mt-3 bg-gray-100 border border-gray-400 rounded-md text-gray-600 px-2 "
                        value="+">+</button>
                </div>
            </div>
        </div>
    )
}
