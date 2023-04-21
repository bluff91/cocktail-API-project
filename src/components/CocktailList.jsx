import { useAppContext } from '../context'
import Cocktail from '../components/Cocktail'
import Loading from '../components/Loading'

const CocktailList = () => {
  const { cocktails, word, loading } = useAppContext()

  const drinks = cocktails.drinks.filter((item) =>
    item.strDrink.toLowerCase().includes(word.toLowerCase())
  )

  if (loading) {
    return <Loading />
  }

  if (drinks.length < 1) {
    return (
      <h2 className="section section-title">No cocktails match your search</h2>
    )
  }

  return (
    <div className="section">
      <h2 className="section-title">Cocktails[]</h2>
      <div className="cocktails-center">
        {drinks.map((item) => {
          return <Cocktail key={item.idDrink} drink={item} />
        })}
      </div>
    </div>
  )
}
export default CocktailList
