import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useCallback, useMemo, useRef, useState } from 'react';
// import {} from ''
import './style.css'
import { Typography, Button } from '@material-tailwind/react';
import useHookLocation from '../../Contex/hook';


export const RenderMap = () => {
    const apiKey = import.meta.env.VITE_APP_PUBLIC_GOOGLE_MAPS_API_KEY;
    const { listLocations } = useHookLocation();
    // console.log(apiKey)
    const center = useMemo(() => ({ lat: 40.4095251787395, lng: -3.700199945222827 }))
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: ['places'],
        region: 'sp'
    })

    if (!isLoaded) {
        return <div>Loading...</div>
    }


    return (
        <GoogleMap
            zoom={12}
            mapContainerClassName='map'
            center={center}
        >
            {Object.keys(listLocations).map((key, idx) => listLocations[key].map((location) => <Marker position={location} shape={'circle'} />))}
            {/* {listLocations.map((location, idx) => <Marker position={location} shape={'circle'} />)} */}
        </GoogleMap>
    )
}
