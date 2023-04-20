const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }
    case 'DISPLAY_DATA':
      return { cocktails: action.payload, loading: false }
    case 'testing':
      return { ...state }
    default:
      return state
  }
}

export default reducer
