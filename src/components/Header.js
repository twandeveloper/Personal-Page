import React, { Component } from 'react'
import Nav from './Nav'
import '../css/Header.css'

export class Header extends Component {
    render() {

        const headerStyle = {
            backgroundImage: 'url("../../public/images/computer.jpg")',
            backgroundAttachment: 'fixed',
            height: '100vh'
        }

        return (
            <div className='bg'>
            <Nav/>
                <h1 className='title'>Hi, I'm Antoine and I am a Software Developer</h1>
            </div>
        )
    }
}

export default Header
