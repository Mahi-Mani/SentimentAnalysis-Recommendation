import { React, Component } from "react";

function List({title, overview}) {
    return (
        <div>
            <ul className="list-none">
                <li>Title: {title}</li>
                <li>Overview: {overview}</li>
                <li><img src="/icmmSD4vTTDKOq2vvdulafOGw93.jpg"></img></li>
            </ul>
        </div>
    )
}

export default List;