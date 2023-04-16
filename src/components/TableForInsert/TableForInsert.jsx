import React, { useMemo, useRef, useState } from 'react'
import ReactTableUI from 'react-table-ui'
import { usePagination, useTable } from 'react-table'
import { useLocationsAPI } from './useLocacionesAPI'
import { GoogleMap, useLoadScript, LoadScript } from '@react-google-maps/api'
// import './style.css'
import { RenderMap } from '../Map/RenderMap'


export const TableForInsert = ({ locations, deleteRow }) => {
    const tableRef = useRef(null)
    const { columns } = useLocationsAPI()
    const coordinates = { lat: 0, lng: 0 };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
        // libraries: ['visualization']
    })
    // const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

    if (!isLoaded) return <div>Loading...</div>


    const singleRowActions = [
        {
            id: "delete",
            tooltip: "Borrar Fila",
            onClick: ({ id, name }) => deleteRow(id),
            children: <div>🪵 Delete Fila</div>,
        }
    ];


    return (
        <div className='flex flex-col w-full'>
            {/* <div className='container'>
                <ReactTableUI title='Locaciones'
                    data={locations}
                    columns={columns}
                    actionOptions={{
                        singleRowActions
                    }}
                    disableSelectAll={true}
                    showPagination={false}
                    tableInstanceRef={tableRef}
                />
            </div> */}


            <RenderMap />
        </div>
    )
}
