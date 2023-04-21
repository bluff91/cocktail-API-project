import { NavLink } from 'react-router-dom'

const Cocktail = ({ drink }) => {
  const uri = drink.idDrink

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={drink.strDrinkThumb} alt="picture of the drink" />
      </div>
      <div className="cocktail-footer">
        <h3>{drink.strDrink}</h3>
        <h4>{drink.strGlass}</h4>
        <p>{drink.strAlcoholic}</p>
        <NavLink className="btn-primary" to={`/SingleCocktail/${uri}`}>
          Details
        </NavLink>
      </div>
    </article>
  )
}
export default Cocktail
