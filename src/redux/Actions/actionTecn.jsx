import DataService from '../../service/service'

const getTecnicos = async (dispatch, func) => {
    const response = await DataService.getTecnicos();
    dispatch(func(response))
}


export { getTecnicos }