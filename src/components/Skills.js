import React, { Component } from 'react'

export class Skills extends Component {

    
    render() {
        const cardStyle = {
            width: '18rem',
            display: 'flex',
            justifyContent: 'center',
            margin: '40% 70px'
        }

        const btnSectionStyle = {
            display: 'flex'
        }

        const btnStyle = {
            margin: '5px 10px'
        }
        
        return (    
            <div class="col-lg 3 col-md-3 col-sm-12 col-xs-12">
            <div class="card" style={cardStyle}>
            <img src="https://picsum.photos/200" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">{this.props.desc}</p>
                <div style={btnSectionStyle}>
                <a style={btnStyle} href="#" class="btn btn-primary">View Code</a>
                <a style={btnStyle} href={this.props.site} class="btn btn-primary">View Site</a>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Skills
     