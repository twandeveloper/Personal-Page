import React, { Component } from 'react'
import Skills from './Skills'


export class Skill extends Component {

    state = {
        skills:[
            {title: 'Simon Says', description: 'I know html', url: 'https://twandeveloper.github.io/simon-says/'},
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
                    desc={skill.description}
                    site={skill.url}/>
                    </div>)
        })
    }
}

export default Skill