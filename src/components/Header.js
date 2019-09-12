import React, { Component } from 'react'
import Nav from './Nav'

export class Header extends Component {
    render() {

        const headerStyle = {
            backgroundImage: 'url("https://picsum.photos/1000")',
            backgroundAttachment: 'fixed',
            height: '100vh'
        }

        const titleStyle={
            marginTop: '10%',
            verticalAlign: 'middle',
            background: "https://picsum.photos/200"
        }
        return (
            <div style={headerStyle}>
            <Nav/>
                <div style={titleStyle}>
                    <h1>Hi, I'm Antoine and I am a Software Developer</h1>
                </div>
            </div>
        )
    }
}

export default Header
