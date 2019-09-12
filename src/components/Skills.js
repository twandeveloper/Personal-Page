import React, { Component } from 'react'

export class Skills extends Component {

    
    render() {
        const cardStyle = {
            width: '18rem',
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 20px'
        }

        const btnSectionStyle = {
            display: 'flex'
        }

        const btnStyle = {
            margin: '5px 10px'
        }
        
        return (    
            <div class="card" style={cardStyle}>
            <img src="https://picsum.photos/200" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">{this.props.desc}</p>
                <div style={btnSectionStyle}>
                <a style={btnStyle} href="#" class="btn btn-primary">View Code</a>
                <a style={btnStyle} href="#" class="btn btn-primary">View Site</a>
                </div>
      
            </div>
            </div>
        )
    }
}

export default Skills
     