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
                <p>This is the Home Page</p>
                <img style={imageStyle} alt="..." src="https://siteassets.pagecloud.com/marcsavard/images/2016-08-10-Gold-VIP-tickets-ID-ea28c78b-f9ab-4212-b41d-0c9b5c33098c.png" />
            </div>
        )
    }
}

export default Home
