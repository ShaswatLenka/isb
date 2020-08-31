import React from "react";

function Footer(){

    const daydict = {
        "1":"Monday",
        "2":"Tuesday",
        "3":"Wednesday",
        "4":"Thursday",
        "5":"Friday",
        "6":"Saturday",
        "7":"Sunday"
    };

    const date_data = new Date();
    const date = date_data.getDate();
    const time = date_data.getHours() % 12;
    const month = date_data.getMonth();
    const year = date_data.getFullYear();
    const day = date_data.getDay();
    const dayname = daydict[day];
    return(
        <div className="Footer">
            <p>{`Date: ${date}/${month}/${year} Day: ${dayname} Time: ${time} o'clock`}</p>
        </div>
        
    )
}

export default Footer;