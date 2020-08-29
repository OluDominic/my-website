import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
//import Map from './map';



class Contact extends React.Component {
    render (){
        return (
            <div className="contact">
                <div className="render">
                    <p className="render-inline">render()<span>&#123;</span></p>
                    <p className="render-inline">return(</p>
                    <p className="render-inline"><span>&lt;</span>h1<span>&gt;</span></p>
                    <h2 className="contact-me">Contact me</h2>
                    <p className="render-inline"><span>&lt;</span>/h1<span>&gt;</span></p>
                    <p className="what-i-do">I am a Junior web developer who is open to freelance opportunities and, 
                        part-time/full-time Job. However, if you have other request or 
                        response, don't hesitate to contact me using below form either.
                    </p>
                </div>

                <form className="entry">
                    <input type="text" className="names" name="name" placeholder="Name"/><br/><br/>
                    <input type="email" className="names" name="email" placeholder="Email"/><br/><br/>
                    <input type="text" className="names" name="subject" placeholder="Subject"/><br/><br/>
                    <textarea className="message" name="message" placeholder="Message" /><br/><br/>
                    <button className="send"><span className="send-span">Send</span>
                    </button>
                    <br/>
                </form>
                <div className="details">
                    <p>Dominic Oludare,</p>
                    <p>Lagos, Nigeria.</p>
                    <p><span style={{color: "cyan"}}>@</span>: dominicoludare@gmail.com</p>
                    <span>
                        <FontAwesomeIcon style={{color: "cyan"}} icon={faPhone} size="1x"/>
                        {" "}
                        <span>+234-7052065184</span>
                    </span>
                </div>
                
                <div>
                    <p className="render-inline">&#41;;</p>
                    <p className="render-inline">&#125;</p>
                </div>
            </div>
        );
    }
}

export default Contact;