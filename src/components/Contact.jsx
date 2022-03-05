import React from 'react';
import ContactCard from "./ContactCard";
import phone from "./phone.png";
import mail from "./mail.png";
import pos from "./pos.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import fb from "./fb.png";

function Contact(props){
    var content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in ex est";
    return (
        <div>
        <div class="contact">
            <ContactCard image={phone} des={content}/>
            <ContactCard image={pos} des={content}/>
            <ContactCard image={mail} des={content}/>

        </div>
        <div class="handles">
            <img class="handle" src={fb} />
            <img class="handle" src={insta} />
            <img class="handle" src={twitter} />
            </div>
        </div>
        
    );
}

export default Contact;