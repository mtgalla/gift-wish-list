import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Will Delete Home Page Later, logs users and passwords from database for now.</p>
                <img style={imageStyle} alt="..." src="http://assets1.ignimgs.com/2018/02/21/fantasyboardgames-blogroll-1519230806845_1280w.jpg" />
            </div>
        )
    }
}

export default Home
