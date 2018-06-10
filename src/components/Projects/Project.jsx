import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Project extends Component {
    render(){
        return (
            <div className="card" id="project">
                <header className="card-header">
                    <p className="card-header-title">
                        {this.props.title}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {this.props.body}
                        <br/><br/>
                        <a href={this.props.github}  target="_blank">
                            Check it out
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
}

export default Project