import React, { useEffect, useRef, useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";

export default function ModalEditTec({ open, setOpen }) {
    const dat = open.data
    const handleOpen = () => setOpen({ isOpen: false, data: {} });
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
        console.log(datTec)
    }, [dat])

    return (
        <React.Fragment>
            <Dialog
                size="xs"
                open={open.isOpen}
                handler={handleOpen}
                className="shadow-none"
            >
                <Card className="bg-slate-600 rounded-lg">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="3" color="white" className='font-normal'>
                            {open.data.name}
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input id="name" size="lg" className="text-white" value={datTec.name} onChange={(e) => { handleOnchange(e) }} />
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don&apos;t have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                                onClick={handleOpen}
                            >
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </React.Fragment>
    );
}