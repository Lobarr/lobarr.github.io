import React, {Component} from 'react'
import MotionUI from 'motion-ui';
import "./Info.css"

export default class Info extends Component {
    componentDidMount(){
        MotionUI.animateIn("#info", "fade-in")
    }
    render(){
        return (
            <div className="info-container">
                <div className="info">
                    <h1>Lobarr</h1>
                    <h2>Software Developer.</h2>
                    <p id="info">I'm a curious individual who happens to have a passion for software development and skilled in writing software in Go, Node.js, Python, and C++. I'm a quick learner that loves exploring new technologies and craves challenges that improve me as a developer and increase my skill-set. I am currently pursuing a Bachelors of IT degree in Networking and IT Security at the University of Ontario Institute of Technology (UOIT) and would be graduating in 2020.</p>
                    <div id="resume">
                        <a  className="" href="https://www.dropbox.com/s/tlpzfe711jchd1u/resume.pdf?dl=0" target="_blank">
                        <span class="icon">
                            <i className="fas fa-download"></i>
                        </span>
                        <span>Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}