import { useEffect, useState } from 'react'
import MemeCard from './MemeCard'
import MemeForm from './MemeForm'

function MemesContainer() {

    const URL = "http://localhost:3000/memes"
    const [memes, setMemes] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setMemes(data))
        .catch(error => alert(error))
    }, []) // []: dependency array (it will just render once)

    function updateMeme(updatedMeme) {
        const updatedMemesArray = memes.map(meme => { // MAP FOR PATCHING
            if (meme.id !== updatedMeme.id) {
                return meme
            } else {
                return updatedMeme
            }
        })
        setMemes(updatedMemesArray)
    }

    function deleteMeme(id) {
        const updatedMemesArray = memes.filter(meme => meme.id !== id) // FILTER FOR DELETING
        setMemes(updatedMemesArray)
    }

    const mappedCards = memes.map(m => <MemeCard key={m.id} meme={m} updateMeme={updateMeme} deleteMeme={deleteMeme}/>)

    return (
        <div>

            <MemeForm memes={memes} setMemes={setMemes} />

            { mappedCards }

        </div>
    )

}

export default MemesContainer