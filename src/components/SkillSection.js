import React, { Component } from 'react'
import Skill from './Skill'
import '../css/SkillSection.css'

export class SkillSection extends Component {
    render() {

        return (
            <div class="container-fluid" className = 'sbg'>
                <Skill/>
            </div>
        )
    }
}

export default SkillSection
