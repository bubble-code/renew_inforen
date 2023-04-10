import { useState } from 'react';
import BarOptHoy from '../components/BarOptHoy/BarOptHoy'
import { Typography } from '@material-tailwind/react';
import moment from 'moment';
import { ListTaskToDay } from '../components/ListTaskHoy/ListTaskToDay';

const Hoy = () => {
    const [currentTec, setCurrentTec] = useState({ nane: '' })
    const days = ['Domin', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const fecha = moment()
    return (
        <div className='py-6'>
            <BarOptHoy current={setCurrentTec} /> 
            <div className="container mx-auto py-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4">
                        <div className="bg-gray-100 rounded-md p-4 flex gap-2">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal" >
                                {days[fecha.day()]}
                            </Typography>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal"                    >
                                {fecha.format("DD-MM")}
                            </Typography>
                            <div className='w-64 flex'>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="p-1 font-normal">
                                    Tec:
                                </Typography>
                                <Typography
                                    variant="h1"
                                    // color="blue-gray"    
                                    className="p-1 font-normal ml-1 text-cyan-900">
                                    {`${currentTec.name || ''} ${currentTec.lastName || ''}`}
                                </Typography>
                            </div>
                        </div>
                        <div className='bg-gray-100 rounded-md p-4 flex gap-2'>
                            <ListTaskToDay />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 px-4">
                        <div className="bg-gray-200 rounded-md p-4">
                            content for second column goes here
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hoy;