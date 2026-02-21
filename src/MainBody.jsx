export default function MainBody() {
    return (
        <main>
            <form className="add-character-form">
                <input 
                    type="text"
                    placeholder="e.g. Keqing"
                    aria-label="Add Genshin character">
                </input>
                <button type="submit">Add Character</button>
            </form>
        </main>
    )
}