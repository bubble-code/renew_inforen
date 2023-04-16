import { useMemo, useState, useCallback } from "react";

export const useLocationsAPI = () => {

    const [locations, setLocations] = useState([])

    const addNewLocation = useCallback((location, oldLocations) => {
        const id = oldLocations.length + 1
        return [...oldLocations, { 'id': id, 'name': location }]
    }, []
    )
    const removeLocationByID = useCallback((id, locations) => {
        return locations.filter(location => location.id !== id)
    }, []
    )
    const updataLocations = useCallback((rowIndex, colomnId, value, locations) => {
        return locations.map((row, idx) => {
            if (idx == rowIndex) {
                return {
                    ...row,
                    [colomnId]: value
                }
            }
            return row
        })
    }, []
    )

    const addLocation = useCallback((locati) => {
        setLocations(oldLoctions => addNewLocation(locati, oldLoctions))
        // console.log(locations)
    }, [addNewLocation]
    )

    const deleteRow = useCallback((id) => {
        console.log(id)
        setLocations(oldLocations => removeLocationByID(id, oldLocations))
    }, [removeLocationByID]
    )

    const updateData = useCallback((rowIndex, columnID, value) => {
        setLocations(oldLocations => updataLocations(rowIndex, columnID, value, oldLocations))
    }, [updataLocations]
    )
    const editableCell = useCallback(({ row: { id }, value, column: { id: colomnId } }) => {
        // console.log(id)
        // console.log(column);
        const [initialValue, setInitialValues] = useState(value)

        const onChange = e => {
            setInitialValues(e.target.value)
        }

        const onBlur = useCallback(() => {
            updateData(id, colomnId, initialValue)
        }, [id, colomnId, initialValue]
        )

        return (<input value={initialValue} onChange={onChange} onBlur={onBlur} />)
    }, [updateData]
    )

    const columns = useMemo(() => [
        {
            Header: 'ID',
            accessor: 'id',
            Cell: editableCell
        },
        {
            Header: 'Name',
            accessor: 'name',
            Cell: editableCell
        }
    ], [])


    return {
        columns,
        locations,
        deleteRow,
        addLocation
    }
}