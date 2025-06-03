import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import MainContainer from '../components/MainContainer'
import Modal from '../components/Modal'
import { stays } from '../utils/stays'

export default function Home() {
    const [showModal, setShowModal] = useState(false)
    const [city, setCity] = useState("");
    const [guests, setGuests] = useState(0);
    const [filteredStays, setFilteredStays] = useState(stays)

    function clearData() {
         setCity("");
        setGuests(0);
        setFilteredStays(stays);
    }

    function handleSearch(city, guests) {
        console.log({ city, guests })

        const filtered = stays.filter(stay =>
            stay.city.toLowerCase() === city.split(",")[0].toLowerCase()
        ).filter(stay => guests <= stay.maxGuests );

        setCity(city);
        setGuests(guests);
        setFilteredStays(filtered);
        setShowModal(false);
    }


    return (

        <>
            <NavBar onShowModal={setShowModal} city={city} guests={guests} clear={clearData} />
            <MainContainer stays={filteredStays} availableStays={filteredStays.length} />
            {showModal && <Modal onShowModal={setShowModal} onSearch={handleSearch} />}
        </>
    )
}
