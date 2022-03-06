import React from 'react';
import LeftPic from './LeftPic';
import RightPic from './RightPic';
import img1 from './A1.png';
import img2 from './A2.png';
import img3 from './A3.png';

function Button(props){
    return (
            <div class="ets">
        <div class="cont eventsh">Our Top Events</div>
        <LeftPic imgsrc={img1}/>
        <RightPic imgsrc={img2}/>
        <LeftPic imgsrc={img3}/>
        <RightPic imgsrc={img2}/>
        </div>
    );
}

export default Button;