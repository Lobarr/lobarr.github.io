import React, {Component} from 'react'
import './Contact.css'

export default class Contact extends Component {
    render(){
        return (
            <div className="contact-container">          
                <a  className="" href="mailto:jesulobaegunjobi@hotmail.com" subject="From portfolio website" >
                    <span class="icon">
                        <i className="fa fa-envelope "></i>
                    </span>
                </a>
                <a  className="" href="https://github.com/Lobarr" target="_blank" rel="noopener noreferrer" subject="From portfolio website" >
                    <span class="icon">
                        <i className="fab fa-github "></i>
                    </span>
                </a>
                <a  className="" href="https://www.linkedin.com/in/jesuloba-egunjobi-781183127/" target="_blank" rel="noopener noreferrer" subject="From portfolio website" >
                    <span class="icon">
                        <i className="fab fa-linkedin "></i>
                    </span>
                </a>
                <a  className="" href="tel://6134139170" >
                    <span class="icon">
                        <i className="fa fa-phone "></i>
                    </span>
                </a>
            </div>
        )
    }
}

