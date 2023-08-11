import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <>
      <div className="search-bar-container">
        <SearchBar />
        <div>search-results</div>
      </div>
    </>
  )
}

export default App
