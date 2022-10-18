import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css'; 

class Movie extends React.Component {
    componentDidMount(){
     const {id} =  this.props.match.params;
    this.props.getMovieDetail(id);
    }



    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula 
                <h2>{`Titulo: ${this.props.movies.Title}`}</h2>
                <img src={this.props.movies.Poster} alt="Img not found" />
                <h4>{`Año: ${this.props.movies.Year}`}</h4>
                <h4>{`Duración: ${this.props.movies.Runtime}`}</h4>
                <h4>{`Elenco: ${this.props.movies.Actors}`}</h4>
                <h4>{`Director: ${this.props.movies.Director}`}</h4>

            </div>
        );
    }
}



export default connect((state) => ({movies: state.movieDetail}), {
    getMovieDetail,
}) (Movie);