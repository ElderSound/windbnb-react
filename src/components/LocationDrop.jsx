import React from 'react'
import LocationItem from './LocationItem'
import { stays } from '../utils/stays';

export default function LocationDrop({ onSelectLocation }) {
  
   const uniqueLocations = stays
    .map(stay => ({ city: stay.city, country: stay.country })) // Extraer solo city y country
    .filter((location, index, self) => 
      index === self.findIndex(l => l.city === location.city && l.country === location.country)
    );
  
  return (
     <div className="h-full text-gray-600">
      <ul className="p-2 min-h-30" id="location-opts">
        {uniqueLocations.map((location, index) => (
          <LocationItem key={`${location.city}-${location.country}`} item={location} onSelectLocation={onSelectLocation} 
/>
        ))}
      </ul>
    </div>
  )
}
