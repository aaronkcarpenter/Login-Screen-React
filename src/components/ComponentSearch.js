import React from 'react'

const ComponentSearch = () => {
    const [query, setQuery] = useState(initialState)

    handleChange(e) {
        setQuery({ query: e.target.value})
    }
    return (
        <div>
            <input type='text' placeholder='Search for a Page' value={this.query} onChange={this.handleChange}/>
        </div>
    )
}

export default ComponentSearch
