import { useEffect, useRef } from 'react'
import { useAppContext } from '../context'

const Searchbar = () => {
  const { setWord } = useAppContext()
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">Search your favorite cocktail</label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={(e) => setWord(e.target.value)}
            ref={inputRef}
          />
        </div>
      </form>
    </section>
  )
}
export default Searchbar
