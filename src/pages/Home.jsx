import Searchbar from '../components/Searchbar'
import CocktailList from '../components/CocktailList'
import Loading from '../components/Loading'
import { useAppContext } from '../context'

const Home = () => {
  const { loading } = useAppContext()

  if (loading) {
    return <Loading />
  }
  return (
    <main>
      <Searchbar />
      <CocktailList />
    </main>
  )
}
export default Home
