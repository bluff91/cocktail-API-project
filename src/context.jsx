import axios from 'axios'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { createContext, useContext } from 'react'
import reducer from './utils/reducer'

export const AppContext = createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const initialState = {
  cocktails: {},
  loading: true,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    try {
      dispatch({ type: 'LOADING' })
      const response = await axios.get(url)
      const data = response.data
      console.log('how mnay times am i Called')
      dispatch({ type: 'DISPLAY_DATA', payload: data })
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    console.log('use effect')
    fetchData()
  }, [url])

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
