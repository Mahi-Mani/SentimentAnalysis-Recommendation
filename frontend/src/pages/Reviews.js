import { React } from "react";
import { useLocation } from "react-router-dom";

function Reviews() {
    const location = useLocation();
    const {movieId} = location.state;
    console.log(movieId);
    return (
        <div>This is reviews page</div>
    )
}

export default Reviews;