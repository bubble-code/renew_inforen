import BarCargar from "../components/BarCargar/BarCargar";
import { Typography } from "@material-tailwind/react";


const Cargar = () => {

    return (
        <div className='py-6 flex flex-col'>
            <BarCargar />
            <form className="w-full flex gap-2 mt-4">
                <div className="flex flex-col text-blue-700" >
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
                </div>
                <div className="flex flex-col">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-red-700">
                        Contacto
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
                </div>

            </form>
        </div>
    )
}

export default Cargar;