import React from 'react'
import Finder from './Finder'

export default function NavBar({onShowModal, city, guests}) {
  return (
    
      <header className="flex flex-wrap justify-between p-4 lg:pt-4 items-center gap-4 lg:max-w-[1000px] mx-auto">
        <figure className="pl-3 md:pl-0">
            <img src="../../public/logo.svg" alt="logo"/>
        </figure>
       <Finder onShowModal={onShowModal} city={city} guests={guests}/>
    </header>
    
  )
}
