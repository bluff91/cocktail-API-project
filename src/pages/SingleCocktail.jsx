import { NavLink, useParams } from 'react-router-dom'
import { useAppContext } from '../context'

const SingleCocktail = () => {
  const { cocktails } = useAppContext()
  const drinks = cocktails.drinks

  const { id } = useParams()
  const filteredDrink = drinks.filter((item) => item.idDrink === id)
  const displayedDrink = filteredDrink[0]
  const {
    strDrinkThumb: img,
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
  } = displayedDrink

  let ingredientsArray = []

  for (let prop in displayedDrink) {
    if (prop.startsWith('strIngredient')) {
      if (displayedDrink[prop] !== null) {
        ingredientsArray.push(displayedDrink[prop])
      }
    }
  }

  return (
    <section className="section cocktail-section">
      <NavLink className="btn btn-primary" to="/">
        back home
      </NavLink>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt="drink's picture" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredientsArray.map((item, index) => (
              <span key={index}>{item} |</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
export default SingleCocktail
