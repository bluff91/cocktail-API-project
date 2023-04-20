import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleCocktail from './pages/SingleCocktail'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import { useAppContext } from './context'

function App() {
  const { cocktails } = useAppContext()
  const drinks = cocktails.drinks
  console.log(drinks)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          {drinks &&
            drinks.map((item, index) => <p key={index}>{item.idDrink}</p>)}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/SingleCocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
