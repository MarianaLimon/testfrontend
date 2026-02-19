import { useState, useEffect } from "react"
import CharacterCard from "../components/CharacterCard"
import { FaStar } from "react-icons/fa"
import SearchBar from "../components/SearchBar"
import Pagination from "../components/Pagination"
import FavoriteTopButton from "../components/FavoriteTopButton";


function Home() {

    const [search, setSearch] = useState("")
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
            let response = await fetch(
                `https://rickandmortyapi.com/api/character?name=${search}&page=${currentPage}`
            )

            let data = await response.json()

            // Si no encuentra por nombre intenta por specie
            if (data.error) {
                response = await fetch(
                `https://rickandmortyapi.com/api/character?species=${search}&page=${currentPage}`
                )
                data = await response.json()
            }

            if (data.error) {
                setCharacters([])
                setTotalPages(0)
                return
            }

            setCharacters(data.results)
            setTotalPages(data.info.pages)

            } catch (error) {
                console.error("Error fetching characters:", error)
                setCharacters([])
                setTotalPages(0)
            }
        }

    fetchCharacters()

}, [search, currentPage])


    return (
        <div className="container">
            <h1 className="title">Ejercició frontend</h1>
            <h2 className="subtitle">Base de datos de personajes</h2>

            <div className="top-bar">
                <div className="search-container">
                    <SearchBar
                    value={search}
                    onChange={(value) => {
                        setSearch(value);
                        setCurrentPage(1);
                    }}
                    />
                </div>

                <FavoriteTopButton />
            </div>

            <div className="container-grid">
                <div className="grid">
                    {characters.map((character) => (
                        <CharacterCard 
                            key={character.id} 
                            character={character} 
                        />
                    ))}
                </div>
                
            </div>

            <div className="pagination">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
        </div>
    )
}

export default Home