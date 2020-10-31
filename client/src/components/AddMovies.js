import React, { useEffect } from 'react';
import axios from 'axios';
export default function AddMovie() {

    useEffect(() => {
        addMovies();
    }, []);

    async function addMovies() {
        console.log('adding Movie')
        const body = { title: "Avengers", year: "2010", imdbId: 1, poster: "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg" };
        const result = await axios.post("http://localhost:5000/addMovie", body)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log("Error", error);
            });


    }
    return (<h1>Adding a movie</h1>);
}