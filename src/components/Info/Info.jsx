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
                    <p id="info">Detail oriented professional with experience in Fullstack Web Applications, Mobile Applications, Web Crawlers, REST APIs, Blockchain Applicationsand Machine Learning. Seekingto join a progressive tech company for the position of Software Developer Internwhere my technical and soft skills can be fully harnessed.</p>
                    <div id="resume">
                        <a  className="" href="https://www.dropbox.com/s/tlpzfe711jchd1u/resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
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