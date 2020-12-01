import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import { Helmet } from 'react-helmet'
//import Map from './map';



class Contact extends React.Component {
    render (){
        return (
            <div className="contact">
               <Helmet>
                  <title>Dominic Oludare | Contact Page</title>
               </Helmet>
                <div className="render">
                    <p className="render-inline">render()<span>&#123;</span></p>
                    <p className="render-inline">return(</p>
                    <p className="render-inline"><span>&lt;</span>h1<span>&gt;</span></p>
                    <h2 className="contact-me">Contact me</h2>
                    <p className="render-inline"><span>&lt;</span>/h1<span>&gt;</span></p>
                    <p className="what-i-do">I am a Web Developer who is open to freelance opportunities , 
                        part-time and full-time Job. I write mostly React  However, if you have other request or 
                        response, don't hesitate to contact me using below form either.
                    </p>
                </div>


                <form 
                className="entry" 
                name="contact "
                method="post"
                data-netlify="true"
                onSubmit="submit"
                actions="/Thank you for your submission/"
                data-netlify-honeypot="bot-field"
                >
                   <p hidden>
                       <label>
                           Don't fill this out: <input name="bot-field"/>
                       </label>
                   </p>

                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" className="names" name="name" placeholder="Name" required /><br/><br/>
                    <input type="email" className="names" name="email" placeholder="Email" required /><br/><br/>
                    <input type="text" className="names" name="subject" placeholder="Subject" required /><br/><br/>
                    <textarea className="message" name="message" placeholder="Message" required /><br/><br/>
                    
                    <button className="send" type="submit"><span className="send-span">Send</span>
                    </button>
                    <br/>
                </form>
                <div className="details">
                    <p className="details-props">Dominic Oludare,</p>
                    <p className="details-props">Lagos, Nigeria.</p>
                    <p className="details-props"><span style={{color: "cyan"}}>@</span><a href="https://dominicoludare@gmail.com">: dominicoludare@gmail.com</a></p><br/>
                    <span className="details-props">
                        <FontAwesomeIcon style={{color: "cyan"}} icon={faPhone} size="1x"/>
                        {" "}
                        <span><a className="tel" href="tel:+2347052065184">+(234) 705 206 5184</a></span>
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