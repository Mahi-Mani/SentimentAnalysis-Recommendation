import { React, Component } from "react";

function List({title, overview, imageSrc}) {
    return (
        <div>
            <ul className="list-none">
                <li>Title: {title}</li>
                <li>Overview: {overview}</li>
                <li><img src={imageSrc}></img></li>
            </ul>
        </div>
    )
}

export default List;