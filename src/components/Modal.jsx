import React, { Fragment } from 'react'
import LocationDrop from './LocationDrop'
import ContadorDrop from './ContadorDrop'
import ModalFinder from './ModalFinder'
import { useState } from 'react'

export default function Modal({ onShowModal, onSearch }) {
    const [showLocation, setShowLocation] = useState(false);
    const [showContador, setShowContador] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [guestCount, setGuestCount] = useState({
        adults: 0, children: 0});

    return (
        <div id="modal" onClick={() => onShowModal(false)} className=" fixed inset-0 z-10 flex items-start justify-center bg-black/50 ">
            <div onClick={(e) => e.stopPropagation()} className="bg-white px-10 py-5 w-full shadow-lg min-h-140 relative">
                <div className="flex justify-between py-4">
                    <h2 className=" text-gray-600 text-lg font-semibold py-2">Edit Your Search</h2>
                    <button onClick={() => onShowModal(false)} className="close cursor-pointer text-xl font-bold md:hidden" id="open">&times;</button>
                </div>
                {/* <!-- MODAL nav--> */}
                <ModalFinder
                    onShowLocation={() => { setShowLocation(true); setShowContador(false) }}
                    onShowContador={() => { setShowContador(true); setShowLocation(false) }}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={(value) => {
                        setSelectedLocation(value);
                        setShowLocation(false);
                    }}
                    guestCount={guestCount}
                    onSearch={() => {
                        const totalGuests = guestCount.adults + guestCount.children;
                        onSearch(selectedLocation, totalGuests); // Ejecuta la búsqueda
                        onShowModal(false); // Cierra el modal
                    }}

                />
                {/*  <!-- LOCACIONES--> */}
                {showLocation && <LocationDrop onShowLocation={setShowLocation} onSelectLocation={(location) => {
                    setSelectedLocation(location);
                    setShowLocation(false);
                }} />}
                {/*  <!-- CONTADOR--> */}
                {showContador && <ContadorDrop onShowContador={setShowContador} guestCount={guestCount} setGuestCount={setGuestCount} />}

            </div>
        </div>
    )
}
