import React, { Component } from 'react'
import Skills from './Skills'

export class Skill extends Component {

    state = {
        skills:[
            {title: 'HTML', description: 'I know html'},
            {title: 'CSS', description: 'I know Css'},
            {title: 'JavaScript', description: 'I know JavaScript'},
            {title: 'Java', description: 'I know Java'},
        ]
    }
    render() {
        const skillStyle = {
            display: 'inline-block',
            justifyContent: 'center'
        }
        return this.state.skills.map((skill, index) => {
            return(<div class="row" style={skillStyle}>
                    <Skills
                    title={skill.title}
                    desc={skill.description}/>
                    </div>)
        })
    }
}

export default Skill