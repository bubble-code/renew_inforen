import BarCargar from "../components/BarCargar/BarCargar";
import { Typography, Button } from "@material-tailwind/react";
import { TableForInsert } from "../components/TableForInsert/TableForInsert";
import { useLocationsAPI } from "../components/TableForInsert/useLocacionesAPI";
import { useRef } from "react";
import { RenderMap } from "../components/Map/RenderMap";
import { AutocompleteLocations } from "../components/AutocompleteLocation/AutoCompleteLocation";
import LocationProvider from "../Contex/locationContext";
import { ListVerticalDrag } from "../components/ListVerticalDrag/ListVerticalDrag";
import useHookLocation from "../Contex/hook";
import * as geolib from 'geolib';

// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'


const Cargar = () => {
    const { addLocation, locations, deleteRow } = useLocationsAPI()
    const { listLocations, setListLocations } = useHookLocation()
    const locationRef = useRef(null)

    // const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete({
    //     debounce: 300
    // })

    const handleAddLocation = () => {
        const value = locationRef.current.value
        if (value.trim() !== '') {
            addLocation(locationRef.current.value)
            locationRef.current.value = ''
        }
        // addLocation(e.target.value)
    }

    const handleReordenar = () => {
        const grupos = Object.values(listLocations).flatMap(locatio => locatio.map(item => ({ latitude: item.lat, longitude: item['lng'], description: item['description'] })))
        console.log(...grupos)

        let key = 0
        const result = []
        console.log(grupos.length)
        while ((grupos.length > 0) && (grupos.length > 3)) {
            let lugar = grupos.pop();
            console.log(lugar)
            const grupo = [lugar];
            for (let i = 0; i < 3; i++) {
                let closest = geolib.findNearest(lugar, grupos)
                console.log(closest)
                grupo.push(closest);
                grupos.splice(grupos.indexOf(closest), 1);
                lugar = closest;
            }
            result[key] = grupo;
            key++
        }
        console.log(result)
    }

    return (
        <div className='py-6 flex flex-col'>

            <div className="flex w-full min-w-0 overflow-hidden gap-2">
                <div className="flex-1 overflow-x-hidden flex flex-col justify-between" >
                    <div>
                        <AutocompleteLocations />
                        <ListVerticalDrag />
                    </div>
                    <div>
                        <Button onClick={() => handleReordenar()}>Hola</Button>
                    </div>
                </div>
                <div className="flex-2 h-full">
                    <RenderMap />
                </div>

            </div>
            {/* <BarCargar /> */}
            {/* <form className="w-full flex gap-2 mt-4 items-end mb-2" > */}
            {/* <div className="flex flex-col text-blue-700" >
                    <Typography
                    // style={{ color: 'blue' }}
                    className="p-1 font-norma w-full text-0.7rem "                    >
                    N.NSerie
                    </Typography>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={{ fontSize: '0.7rem' }}
                        className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-300 w-20"
                        required />
                        </div> 
                        <div className="flex flex-col text-blue-700">
                        <Typography
                        className="p-1 font-normal text-blue-700 text-0.7rem">
                        N.Expedicion
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-300"
                        required />
                        </div>
                        <div className="flex flex-col">
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-blue-700">
                        N.Nom.Maquina
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-300"
                        required />
                </div>
                <div className="flex flex-col">
                <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-red-700">
                N.Serie
                </Typography>
                <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                required />
                </div>
                <div className="flex flex-col">
                <Typography
                variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-red-700">
                        Nom.Maquina
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                        required />
                    </div>*/}
            {/* <div className="flex flex-col mb-2">
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal text-blue-700">
                    Locacion
                    </Typography>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-300"
                    ref={locationRef}
                    // value={value}
                    // onChange={(e) => setValue(e.target.value)}
                        required />
                </div>
                <div >
                <Button className="border" onClick={handleAddLocation}>Aceptar</Button>
            </div> */}
            {/* <div className="flex flex-col">

{data.map(({ pace_id, description }) => (<div key={pace_id}>{description}</div>))}
</div> */}
            {/*<div className="flex flex-col">
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal text-red-700">
                    Nombre Contacto
                    </Typography>
                    <input
                    type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                        required />
                        </div>
                        <div className="flex flex-col">
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-red-700">
                        Telf.Contacto
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                        required />
                        </div>
                        <div className="flex flex-col">
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-red-700">
                        Cod.Ubica
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                        required />
                        </div>
                        <div className="flex flex-col">
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-red-700">
                        Nom.Ubica
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                        required />
                        </div>
                        <div className="flex flex-col">
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-red-700">
                        Direccion
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                        required />
                        </div>
                        <div className="flex flex-col">
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-red-700">
                        Cp
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                        required />
                        </div>
                        <div className="flex flex-col">
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-red-700">
                        Localidad
                        </Typography>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                        required />
                </div>
                <div className="flex flex-col">
                <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-red-700">
                Comunidad
                </Typography>
                <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
                required />
            </div> */}

            {/* </form> */}
            {/* <TableForInsert locations={locations} deleteRow={deleteRow} /> */}
        </div>
    )
}

export default Cargar;