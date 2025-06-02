import React, { useState } from 'react'
import Cards from './Cards'


export default function MainContainer({stays, availableStays}) {
   
    
    /* console.log("hola", stays.map((stay) => console.log(stay))) */
  return (
    <>
    <main className="p-4">
        <div className="flex  justify-between p-4 items-center lg:max-w-[1000px] mx-auto ">
            <h1 className="font-bold text-2xl">Stays in <span id="filtered-city"></span>Finland</h1>
            <p className="text-gray-400"><span id="count">{availableStays} </span>stays</p>
        </div>
        <ul className="grid cards-grid py-2 gap-4 justify-center w-full md:grid-cols-2 lg:grid-cols-3 mx-auto lg:max-w-[1000px] "
            id="character-list">
            {/* <!-- CARDS--> */}

            {stays.map((stay, index) => (
                <Cards title={stay.title}
                    photo={stay.photo}
                    type={stay.type}
                    beds={stay.beds}
                    rating={stay.rating}
                    superHost={stay.superHost}
                    key={index}
                />
            ))}
        </ul>
    </main>
    </>
  )
}
