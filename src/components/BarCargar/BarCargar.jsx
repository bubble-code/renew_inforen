import { Navbar, Button, Typography } from "@material-tailwind/react"
import ListTecHoy from "../ListTecHoy/ListTecHoy";
import { useState } from "react";
import { useGetTecnicosQuery } from "../../redux/Api/firebase-api-main";

const BarCargar = () => {

    const [current, setCurrent] = useState({})
    const { data = [], isLoading } = useGetTecnicosQuery()
    return (
        <div className="flex flex-col">
            <Navbar className="py-2 px-4 lg:px-8 lg:py-4 text-gray-950">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex w-64 justify-around items-center">
                        <ListTecHoy current={setCurrent} listRender={data} />
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"                    >
                            {`${current.name} ${current.lastName}`}
                        </Typography>

                    </div>
                    <div>
                        <Button variant="gradient" size="sm" className="hidden lg:inline-block ml-2 px-4 py-2 text-gray-950 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal"                    >
                                Show Map
                            </Typography>
                        </Button>
                        <Button variant="gradient" size="sm" className="hidden lg:inline-block ml-2 px-4 py-2 text-gray-950 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal"                    >
                                Details
                            </Typography>
                        </Button>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default BarCargar;