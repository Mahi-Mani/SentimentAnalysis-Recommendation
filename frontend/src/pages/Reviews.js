import { React, Component } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Display from "../components/Display";

function wrapperReviews(WrapperComponent) {
    return (props) => {
        const location = useLocation();
        return <WrapperComponent
            {...props}
            location={location}
        />
    }
}
class Reviews extends Component {
    render() {
        const { location } = this.props;
        const { backdrop } = location.state;
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
}

export default wrapperReviews(Reviews);