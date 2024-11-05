import { React, Component } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Display from "../components/Display";
import Header from "../components/Header";
import DisplayWrapper from "../components/DisplayWrapper";
import API from "../utils/API";

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
    state = {
        reviews: [],
        backdrop: "",
        movieId: 0
    }

    componentDidMount() {
        const { location } = this.props;
        const { backdrop, movieId } = location.state;
        console.log(`Movie Id ${movieId}`);
        API.getReviews(movieId).then(data => {
            this.setState({
                backdrop: backdrop,
                movieId: movieId,
                reviews: data.data.results
            });
        })
    }

    render() {
        console.log(this.state.reviews);
        return (
            <>
                <Navbar
                    page="reviews"
                    backdrop={this.state.backdrop}
                />
                <Header />
                <DisplayWrapper>
                    {this.state.reviews.map(review => {
                        return (
                            <Display
                                review={review}
                            />
                        )
                    })}
                </DisplayWrapper>
            </>
        )
    }
}

export default wrapperReviews(Reviews);