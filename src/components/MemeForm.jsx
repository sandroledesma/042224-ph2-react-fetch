import { useState } from 'react'

function MemeForm(memes, setMemes) {

    const URL = 'http://localhost:3000/memes'

    const [img_url, setImgURL] = useState("");
    const [caption, setCaption] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            // body: JSON.stringify( {img_url: img_url, caption: caption}) // instead of creating newVariables
            body: JSON.stringify( { img_url, caption, likes: 0 } )
        })
        .then(response => response.json)
        .then(newMemes => setMemes( [...memes, newMemes] ) ) // using a spread operator to create a copy of the array to re-render the page and add what was posted to the page
        // SPREAD OPERATOR FOR POST request
        
        setImgURL("")
        setCaption("")
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="img_url">Image URL:</label>

            <input name="img_url" 
            type="text" 
            onChange={event => setImgURL(event.target.value)}
            value={img_url}
            placeholder="type image URL here"
            />

            <label htmlFor="caption">Caption:</label>

            <input name="caption" 
            type="text" 
            onChange={event => setCaption(event.target.value.toLowerCase())}
            value={caption}
            placeholder="type caption here"
            />

            <input type="submit" value="Add Meme" />

        </form>
    )

}

export default MemeForm