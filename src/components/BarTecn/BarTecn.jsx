

import { Button, Typography, Navbar } from "@material-tailwind/react"

export const BarTecn = ({ setWhich }) => {

    function onChangeWhich(id) {
        
        setWhich(id)
    }

    return (
        <Navbar className="py-2 px-2  lg:py-4 text-gray-950">
            <div className="container mx-auto flex items-center justify-start">
                <div className="flex-grow">

                    <Button variant="gradient" size="sm" className="hidden lg:inline-block ml-2 px-4 py-2 text-gray-950 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 border border-cyan-200" onClick={() => onChangeWhich(1)}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"                    >
                            List Tecnicos
                        </Typography>
                    </Button>
                    <Button variant="gradient" size="sm" className="hidden lg:inline-block ml-2 px-4 py-2 text-gray-950 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 border-cyan-200 border" onClick={() => onChangeWhich(2)} >
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"                    >
                            Add Tecnico
                        </Typography>
                    </Button>
                </div>
            </div>
        </Navbar>

    )
}
