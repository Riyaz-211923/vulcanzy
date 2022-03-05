import React from 'react';



function ContactCard(props){
    return (
        <div class="ct">
            <img src={props.image}></img>
            <div class="contactcont">
            {props.des}
            </div>
        </div>
    );
}

export default ContactCard;