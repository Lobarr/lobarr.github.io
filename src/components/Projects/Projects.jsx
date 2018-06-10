import React, {Component} from 'react'
import Project from './Project'
import "./Projects.css"

export default class Projects extends Component {
    render(){
        return (
            <div className="projects-container">
                <div className="projects">
                <div className="project">
                    <Project 
                        title="Gizo"
                        body="A decentralized distributed system built using blockchain technology to provide a marketplace for users to trade processing power" 
                        github="http://github.com/gizo-network/gizo"
                        />
                </div>                
                <div className="project">
                    <Project 
                        title="Gizo Python SDK" 
                        body="An SDK that allows clients connect to the Gizo network" 
                        github="http://github.com/gizo-network/gizo-python-sdk"
                        />
                </div>
                <div className="project">
                    <Project 
                        title="Switch Emulator" 
                        body="Emulator of a switch handling 10,000 packets across multiple VLANs based on packet priority" 
                        github="https://github.com/Lobarr/switch-emulator"/>
                </div>
                <div className="project">
                    <Project 
                        title="Centrum" 
                        body="API that keeps track of active dispatcher nodes and used to connect to the Gizo
                        network" 
                        github="https://github.com/gizo-network/centrum"/>
                </div>
                <div className="project">
                    <Project 
                        title="Anko" 
                        body="An extension of the interpreted language to add scientific computing and ML packages for
                        use in Gizo" 
                        github="https://github.com/gizo-network/anko"/>
                </div>
                <div className="project">
                    <Project 
                        title="Hawkeye" 
                        body="A web application that allows users view rtsp and rtmp streams for IP cameras" 
                        github="https://github.com/Lobarr/hawkeye"/>
                </div>
                <div className="project">
                    <Project 
                        title="IMAP Client" 
                        body="
                        IMAP client as an API used to retrieve email threads and send emails" 
                        github="https://github.com/Lobarr/imap-client"/>
                </div>
                
                </div>
            </div>
        )
    }
}