import { useRef, useCallback, useContext, useEffect } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Input, IconButton, Typography } from '@material-tailwind/react';
import useHookLocation from '../../Contex/hook';
import LocationsContext from '../../Contex/locationContext';


export const AutocompleteLocations = () => {
    const { listLocations, setListLocations } = useHookLocation()
    const locationRef = useRef(null)
    // console.log(data)
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            componentRestrictions: { country: ['es'] }
        },
        debounce: 900
    })

    const handleSearch = useCallback((e) => {
        setValue(e.target.value)
    })

    const renderSuggestion = () => {
        return data.map((suggestion) => {
            const { place_id, structured_formatting: { main_text, secondary_text } } = suggestion

            return (
                <li key={place_id} onClick={() => handleSelect(suggestion)}
                    className='hover:bg-slate-500 cursor-pointer mb-2 rounded px-4 py-1' >
                    <Typography small>{main_text}</Typography>
                    <small>{secondary_text}</small>
                </li>
            )
        }
        )
    }
    const handleSelect = async (suggestion) => {
        const { structured_formatting: { main_text, secondary_text } } = suggestion
        locationRef.current.value = `${main_text}, ${secondary_text}`
        setValue(suggestion, false)
        clearSuggestions()
        const { description } = suggestion
        const coorderna = await getGeocode({ address: description })
        const { lat, lng } = await getLatLng(coorderna[0])
        setListLocations((oldLocations) => ({ ...oldLocations, 1: [...oldLocations[1], { lat, lng, description }] }))
        // console.log(lat, lng)
    }

    useEffect(() => {

    }, [ready])

    const addLocation = async () => {

    }


    return (
        <div className="flex gap-2 items-center mb-2 w-full min-w-0">
            <div className='flex-1'>
                <div >
                    <Input
                        // label=''
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-300"
                        ref={locationRef}
                        onChange={handleSearch}
                        // required
                        disabled={!ready}

                    />
                    {status === 'OK' && <ul className='absolute z-10 bg-slate-700 rounded shadow-md mt-10 ml-2 p-4'>{renderSuggestion()}</ul>}
                </div>
            </div>
        </div>
    )

}