import { useEffect, useState, Fragment } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input
} from "@material-tailwind/react";
import { useUpdateTecnicoMutation } from "../../redux/Api/firebase-api-main";

export default function ModalEditTec({ open, setOpen }) {
    const [updateTec, { isLoading }] = useUpdateTecnicoMutation()
    const dat = open.data
    const handleOpen = () => {
        updateTec(datTec)
        setOpen({ isOpen: false, data: {} })
    };

    const [datTec, setDatTec] = useState({})

    const handleOnchange = e => {
        // console.log(e);
        setDatTec({
            ...datTec, [e.target.id]: e.target.value
        })
    }

    useEffect(() => {
        setDatTec({
            ...dat
        })
    }, [dat])

    return (
        <Fragment>
            <Dialog size="xs" open={open.isOpen} className="shadow-none">
                <Card className="bg-slate-600 rounded-lg">
                    <CardBody className="flex flex-col gap-4">
                        <Typography color="white" className='font-normal'>
                            {open.data.name}
                        </Typography>
                        <Input id="name" size="lg" className="text-black bg-slate-300" value={datTec.name} onChange={(e) => { handleOnchange(e) }} />
                        <Input id="lastName" size="lg" className="text-black bg-slate-300" value={datTec.lastName} onChange={(e) => { handleOnchange(e) }} />
                        <Input id="phone" size="lg" className="text-black bg-slate-300" value={datTec.phone} onChange={(e) => { handleOnchange(e) }} />
                        <Input id="email" size="lg" className="text-black bg-slate-300" value={datTec.email} onChange={(e) => { handleOnchange(e) }} />
                        <Input id="rol" size="lg" className="text-black bg-slate-300" value={datTec.rol} onChange={(e) => { handleOnchange(e) }} />
                        <Input id="status" size="lg" className="text-black bg-slate-300" value={datTec.status} onChange={(e) => { handleOnchange(e) }} />
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-between content-between w-full">
                        <Button onClick={handleOpen} className="px-6 py-2 shadow-md bg-slate-700 w-2/5 text-center font-extralight" >
                            Save
                        </Button>
                        <Button onClick={() => setOpen({ isOpen: false, data: {} })} className="px-4 py-2 shadow-md bg-slate-700 w-2/5 text-center font-extralight" >
                            Cancel
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </Fragment>
    );
}