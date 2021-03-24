// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({ initialName = '' }) {
    // 🐨 initialize the state to the value from localStorage
    //   window.localStorage.getItem('name') || initialName
    const [name, setName] = React.useState(() => window.localStorage.getItem('name') || initialName)
    const [count, setCount] = React.useState(0)
    const [nameUC, setNameUC] = React.useState(() => window.localStorage.getItem('nameUC') || initialName)


    // 🐨 Here's where you'll use `React.useEffect`.
    // The callback should set the `name` in localStorage.
    // 💰 window.localStorage.setItem('name', name)


    function handleChange(event) {
        setName(event.target.value)
        window.localStorage.setItem('name', name)
    }

    function handleClick(event) {
        setNameUC((event.target.value).toUpperCase())
    }

    React.useEffect(() => {
        window.localStorage.setItem('name', name)
        window.localStorage.setItem('nameUC', nameUC)
        setCount(count + 1)
    }, [name])


    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} onClick={handleClick} id="name" />
            </form>
            {name ? <strong>Hello {name}, {nameUC}</strong> : 'Please type your name'}
            <p>localStorage: {window.localStorage.getItem('name') - window.localStorage.getItem('nameUC')}</p>
            <p>Contagem: {count}</p>c
        </div>
    )
}

function App() {
    return <Greeting />
}

export default App
