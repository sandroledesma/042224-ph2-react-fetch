import { useEffect, useState } from 'react'
import MemeCard from './MemeCard'
import MemeForm from './MemeForm'

function MemesContainer() {

    const URL = "http://localhost:3000/memes"
    const [memes, setMemes] = useState([])

    const mappedCards = memes.map(m => <MemeCard key={m.id} meme={m} />)

    return (
        <div>

            <MemeForm />

            { mappedCards }

        </div>
    )

}

export default MemesContainer