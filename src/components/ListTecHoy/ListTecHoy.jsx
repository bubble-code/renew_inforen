import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Typography } from "@material-tailwind/react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ListTecHoy() {
    const [selectTec, setSelectTec] = useState('Seleccione un tecnico')
    return (
        <div className="flex gap-4">

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Tecnicos
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item  >
                                {
                                    ({ active }) => {
                                        return <div onClick={() => setSelectTec('Alejandro')}>
                                            <Typography
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )
                                                }
                                            >
                                                Alejandro
                                            </Typography>
                                        </div>
                                    }
                                }
                            </Menu.Item>
                            <Menu.Item>
                                {
                                    ({ active }) => {
                                        return <div onClick={() => setSelectTec('Obregon')}>
                                            <Typography
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )
                                                }
                                            >
                                                Obregon
                                            </Typography>
                                        </div>
                                    }
                                }
                            </Menu.Item>

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Typography
                // as="text"
                variant="small"
                className="mr-4 cursor-pointer py-1.5 font-normal"
            >
                {selectTec}
            </Typography>
        </div>
    )
}
