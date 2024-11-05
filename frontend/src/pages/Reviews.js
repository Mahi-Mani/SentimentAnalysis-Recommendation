import { React } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Display from "../components/Display";

function Reviews() {
    const location = useLocation();
    const { movieId } = location.state;
    const { backdrop } = location.state;
    console.log(movieId);
    return (
        <>
            <Navbar
                page="reviews"
                backdrop={backdrop}
            />
            <Display />
        </>
    )
}

export default Reviews;