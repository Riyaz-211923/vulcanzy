import React from 'react';
import img from './A1.png';

function LeftPic(props){
    return (
        <div className='parent'>    
        <div class="lpic">
            <div class="pic">
                <img class="image" src={props.imgsrc}></img> 
            </div>
            <div class="ptxt cont">
                <div class="lpich">Nesciunt Qui</div>
                <div class="lpicc">Aut aspernatur iste quo corrupti atque eum dignissimos quidem ad voluptatem velit sit inventore corrupti. At nesciunt aperiam non aperiam tenetur et impedit dolorum eum natus ratione ab quisquam dolorum.</div>
            </div>
        </div>
        </div>
    );
}

export default LeftPic;