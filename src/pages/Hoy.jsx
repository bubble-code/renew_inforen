import BarOptHoy from '../components/BarOptHoy/BarOptHoy'
import ListTecHoy from '../components/ListTecHoy/ListTecHoy';
import { Typography } from '@material-tailwind/react';
import moment from 'moment';

const Hoy = () => {
    const days = ['Domin', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const fecha = moment()
    return (
        <div className='py-6'>
            <BarOptHoy />
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
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal"                    >
                                Tec:
                            </Typography>
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