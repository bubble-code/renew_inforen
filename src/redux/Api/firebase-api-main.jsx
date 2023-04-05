import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DataService from '../../service/service';

export const firebaseApiMain = createApi({
    reducerPath: 'firebaseApiMain',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getTecnicos: builder.query({
            async queryFn() {
                try {
                    const response = await DataService.getTecnicos();
                    return {
                        data: response,
                    }

                } catch (error) {
                    console.log(error)
                    return { data: error }
                }

            }
        }),
    }),
})

export const { useGetTecnicosQuery } = firebaseApiMain;