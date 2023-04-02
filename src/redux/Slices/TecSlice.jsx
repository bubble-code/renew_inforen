import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


const initialStateTecni = {
    data: [],
    error: null,
    loading: null
}

const TecByAdapter = createEntityAdapter();

const initialStateTec = TecByAdapter.getInitialState({
    status: 'idle',
})

const createTecSlice = ({ name, initialStateTec, reducers, extraReducers }) => {
    return createSlice({
        name,
        initialStateTec,
        reducers: {
            ...reducers
        },
        extraReducers: {
            ...extraReducers
        }
    })
}

const SliceTec = createTecSlice({
    name: 'Tecnicos',
    initialStateTec: initialStateTecni,
    reducers: {
        reset: () => ({ ...initialStateTecni }),
        // updateAll,
    },
    extraReducers: []
})

export { SliceTec }