import { useState } from 'react'

function MemeForm({ setMemes }) {

    const URL = 'http://localhost:3000/memes'

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="img_url">Image URL:</label>

            <input name="img_url" type="text" />

            <label htmlFor="caption">Caption:</label>

            <input name="caption" type="text" />

            <input type="submit" value="Add Meme" />

        </form>
    )

}

export default MemeForm