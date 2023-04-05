import { Navbar, Button, Typography } from "@material-tailwind/react"

const BarCargar = () => {

    return (
        <Navbar className="py-2 px-4 lg:px-8 lg:py-4 text-gray-950">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex-grow">
                    {/* <ListTecHoy /> */}
                </div>
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
        </Navbar>
    )
}

export default BarCargar;