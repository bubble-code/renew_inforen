import { createContext, useMemo, useState } from "react";

const LocationsContext = createContext(null);
LocationsContext.displayName = "ListLocations"

export const LocationProvider = ({ children }) => {
    const [listLocations, setListLocations] = useState({ 1: [] })
    // const value = useMemo(() => [listLocations, setListLocations], [listLocations, setListLocations])

    return (
        <LocationsContext.Provider value={{ listLocations, setListLocations }}>
            {children}
        </LocationsContext.Provider>
    )
}

export default LocationsContext