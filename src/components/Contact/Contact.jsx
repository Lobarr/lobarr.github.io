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
                <a  className="" href="https://github.com/Lobarr" target="_blank" subject="From portfolio website" >
                    <span class="icon">
                        <i className="fab fa-github "></i>
                    </span>
                </a>
                <a  className="" href="https://www.linkedin.com/in/jesuloba-egunjobi-781183127/" target="_blank" subject="From portfolio website" >
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


// <div id="form">
//                 <form onSubmit={this.handleSubmit}>
//                 <div className="field">
//             <label className="label">Name</label>
//             <div className="control">
//                 <input name="name" className="input" type="text" placeholder="Text input" />
//             </div>
//             </div>

//                         <div className="field">
//             <label className="label">Email</label>
//             <div className="control has-icons-left has-icons-right">
//                 <input name="email" className="input is-danger" type="email" placeholder="Email input" />
//                 <span className="icon is-small is-left">
//                 <i className="fas fa-envelope"></i>
//                 </span>
//                 <span className="icon is-small is-right">
//                 <i className="fas fa-exclamation-triangle"></i>
//                 </span>
//             </div>
//             <p className="help is-danger">This email is invalid</p>
//             </div>
//             <div className="field">
//             <label className="label">Subject</label>
//             <div className="control">
//                 <input name="subject" className="input" type="text" placeholder="Text input" />
//             </div>
//             </div>



//             <div className="field">
//             <label className="label">Message</label>
//             <div className="control">
//                 <textarea name="message" className="textarea" placeholder="Textarea"></textarea>
//             </div>
//             </div>


//             <div className="field is-grouped">
//             <div className="control">
//                 <button type="submit" className="button is-link">Submit</button>
//             </div>
//             </div>
//                 </form>
//                 </div>
//                 <div id="social">
//                     <a href="http://"></a>
//                 </div>

