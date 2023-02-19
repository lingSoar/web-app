import React from "react"
import SearchInput from "../../components/searchInput"
import Header from "../../components/header"
import "./index.scss"

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section>
        <h1>Search Trends</h1>
        <div>
          <SearchInput />
        </div>
      </section>
    </div>
  )
}

export default Home