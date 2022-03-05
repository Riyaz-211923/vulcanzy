import React from 'react';


function RightPic(props){
    return (
            
        <div class="rpic">
            <div class="ptxtr cont">
                <div class="lpich">Nesciunt Qui</div>
                <div class="lpicc">Aut aspernatur iste quo corrupti atque eum dignissimos quidem ad voluptatem velit sit inventore corrupti. At nesciunt aperiam non aperiam tenetur et impedit dolorum eum natus ratione ab quisquam dolorum.</div>
            </div>
            <div class="picr">
                <img class="image" src={props.imgsrc}></img> 
            </div>
        </div>
    );
}

export default RightPic;