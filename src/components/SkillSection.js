import React, { Component } from 'react'
import Skill from './Skill'
import '../css/SkillSection.css'

export class SkillSection extends Component {
    render() {

        const skillStyle = {
            backgroundImage: 'url("https://picsum.photos/1000")',
            backgroundAttachment: 'fixed',
            height: '100vh'
        }

        return (
            <div class="container" className = 'sbg'>
                <Skill/>
            </div>
        )
    }
}

export default SkillSection
