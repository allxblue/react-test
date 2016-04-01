import React from 'react'


require('./styles.sass')

class MyApp2 extends React.Component {
    render () {
        return <h1>Wonderful ttt test 2</h1>
    }
}

React.render(<MyApp2 />,
    document.body)
