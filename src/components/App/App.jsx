import React, { Component } from 'react';
import {Layout} from 'antd';
import {Info, Projects, Skills, Contact} from '../index';
import {scroller, Element, animateScroll} from 'react-scroll';
import './App.css';
import 'motion-ui/dist/motion-ui.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleBurger = this.handleBurger.bind(this);
  }
  handleBurger(){
    let toggle = document.querySelector("#nav-toggle");
    let menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("is-active"); 
  }
  render() {
    return (
        <Layout>
        <nav className="navbar is-fixed-top header">
          <div className="container">
              <div className="navbar-brand">
                  <div className="title-container">
                    <h2 className="navbar-item title" onClick={() => animateScroll.scrollToTop()}>Lobarr</h2>
                  </div>
                  <span id="nav-toggle" className="navbar-burger burger is-hoverable" onClick={this.handleBurger} data-target="navbarMenu">
                      <span style={{color: 'black'}}></span>
                      <span style={{color: 'black'}}></span>
                      <span style={{color: 'black'}}></span>
                  </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                  <div className="navbar-end">
                      <div className="tabs is-right">
                          <ul>
                              <li> <a onClick={() => scroller.scrollTo("projects", {delay: 0, smooth: 'easeInOutQuart'})}>Projects</a></li>
                              <li><a onClick={() => scroller.scrollTo("skills", {delay: 0, smooth: 'easeInOutQuart'})}>Skills</a></li>
                              <li><a onClick={() => scroller.scrollTo("contact", {delay: 0, smooth: 'easeInOutQuart'})}>Contact</a></li>           
                          </ul>
                      </div>
                  </div>
              </div>
            </div>
        </nav>
        <div className="body-container">
          <Info />
          <Element name="projects" style={{width: '100%'}}>
            <Projects />
          </Element>
          <Element name="skills" style={{width: '100%'}}>
            <Skills />
          </Element>
          <Element name="contact" style={{width: '100%'}}>
            <Contact />
          </Element>
        </div>  
      </Layout>
    );
  }
}

export default App;
