import { React, Component } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Display from "../components/Display";

class Reviews extends Component {

    componentDidMount() {
        const location = useLocation();
        const { movieId } = location.state;
        const { backdrop } = location.state;
        console.log(movieId);
    }

    render() {
        return
        (
            <>
                <Navbar
                    page="reviews"
                    backdrop={backdrop}
                />
                <Display />
            </>
        )
    }
}

export default Reviews;