import React from 'react'


require('./styles.sass')

class MyApp extends React.Component {
    render () {
        return <h1>Wonderful App test</h1>
    }
}

React.render(<MyApp />,
    document.body)
