import axios from "axios";

export default {
    getDetails: function (movieName) {
        return axios.get("https://api.themoviedb.org/3/search/movie?query=" + movieName + "&api_key=160c0a8581ed8c24a09f45e46e95f53c");
    }
}