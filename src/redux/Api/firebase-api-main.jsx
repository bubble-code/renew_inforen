import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DataService from '../../service/service';

export const firebaseApiMain = createApi({
    reducerPath: 'firebaseApiTec',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['TecTag'],
    endpoints: (builder) => ({
        getTecnicos: builder.query({
            queryFn: async () => {
                try {
                    const response = await DataService.getTecnicos();
                    return {
                        data: response,
                    }

                } catch (error) {
                    console.log(error)
                    return { data: error }
                }
            },
            providesTags: (result) => result ? [{ type: 'TecTag', id: 'List' }] : []
        }),
        addTecnico: builder.mutation({
            queryFn: async (data) => {
                const { name, lastName, phone, email, rol, create, status } = data
                try {
                    const response = await DataService.addNewClient({ name, lastName, phone, email, rol, create, status })
                    return { data: response }
                    // builder.queryCache.invalidateQueries('getTecnicos')
                }
                catch (error) {
                    console.log(error)
                    return { data: error }
                }
            },
            invalidatesTags: [{ type: 'TecTag', id: 'List' }]
        }),
        updateTecnico: builder.mutation({
            queryFn: async (data) => {
                try {
                    const response = await DataService.updateTecnico(data)
                    return { data: response }
                } catch (error) {
                    console.log(error)
                    return { data: error }
                }
            },
            invalidatesTags: [{ type: 'TecTag', id: 'List' }]
        })
    }),
})

export const { useGetTecnicosQuery, useAddTecnicoMutation, useUpdateTecnicoMutation } = firebaseApiMain;