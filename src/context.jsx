import axios from 'axios'
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from 'react'

export const AppContext = createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [cocktails, setCocktails] = useState({})
  const [word, setWord] = useState('')

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(url)
      const data = response.data
      setCocktails(data)
      setLoading(false)
    } catch (error) {
      console.log(error.response)
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    console.log('fetch')
    fetchData()
  }, [url, fetchData])

  return (
    <AppContext.Provider
      value={{ loading, setLoading, cocktails, word, setWord }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
