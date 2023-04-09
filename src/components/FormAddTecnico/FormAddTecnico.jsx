import { useRef } from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { useAddTecnicoMutation } from '../../redux/Api/firebase-api-main';
import moment from 'moment';



export const FormAddTecnico = () => {
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const telepRef = useRef(null);
    const emailRef = useRef(null);
    const levelRef = useRef(null);

    // mx-auto max-w-lg sm:max-w-3xl 

    const [addTec, { isLoading }] = useAddTecnicoMutation()

    const handleAddTec = (event) => {
        event.preventDefault();
        const date = moment().format('DD-MM-YY')
        addTec({ name: nameRef.current.value, lastName: lastNameRef.current.value, phone: telepRef.current.value, email: emailRef.current.value, rol: levelRef.current.value, create: date, status: 'active' }).unwrap()
        console.log('Tecnico Adicionado');
        nameRef.current.value = ''
        lastNameRef.current.value = ''
        telepRef.current.value = ''
        emailRef.current.value = ''
        // levelRef.current.value = ''
    }


    return (
        <form className="px-4 py-8 inline-block w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 " >
            <div className="mb-4">
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                    Name
                </Typography>
                <input
                    type="text"
                    id="name"
                    name="name"
                    ref={nameRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                    Last Name
                </Typography>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    ref={lastNameRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                    Phone
                </Typography>
                <input
                    type="text"
                    id="telep"
                    name="telep"
                    ref={telepRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                    Email
                </Typography>
                <input
                    type="email"
                    id="email"
                    name="email"
                    ref={emailRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                    Rol
                </Typography>
                <select
                    id="level"
                    name="level"
                    ref={levelRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="">-- Select Rol --</option>
                    <option value="Tecnico de Campo">Tecnico de Campo</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div className='text-right'>
                <Button variant="gradient" type='submit' size="sm" className="hidden lg:inline-block ml-2 px-4 py-2 text-gray-950 rounded-md shadow-sm focus:outline-none focus:ring border border-cyan-400" onClick={(e) => handleAddTec(e)} disabled={isLoading}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal"                    >
                        Add
                    </Typography>
                </Button>
            </div>
        </form>
    )
}






