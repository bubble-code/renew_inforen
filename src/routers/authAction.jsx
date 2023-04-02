

export const authLogin = (dispatch, value) => {
    const { user, password } = value
    dispatch({ type: 'signin', payload: { user: user, password: password } })
}