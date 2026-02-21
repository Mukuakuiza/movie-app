import Search from "./components/Search.jsx";
import {useState} from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState('')

  return (
      <main>
          <div className="pattern"/>

          <div className="wrapper">
              <header>
                  <img src="./hero.png" alt="hero"/>
                  <h1>Find <span className="text-gradient">Movies</span> That You Will Enjoy In Here... </h1>
              </header>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
              <h1 className="text-white">{searchTerm}</h1>
          </div>
      </main>
  )
}

export default App
