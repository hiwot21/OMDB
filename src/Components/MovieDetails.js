import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
const Div = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  display: ${(props) => props.display};

  & img {
    height: 100%;
    width: 300px;
  }

  ${(props) =>
    props.shaded &&
    css`
      background-color: silver;
      border-radius: 5px;
      padding: 0 5px;
      margin: 10px;
    `};
`;

const MovieDetails = (props) => {
  return (
    <Div display="flex">
      <Div width="600px">
        {" "}
        <img src={props.posterUrl} alt="movie poster"></img>
      </Div>
      <Div margin="0 0 0 10px">
        <Div display="flex">
          <h4 style={{ width: "200px" }}>{props.title}</h4>{" "}
          <h4 style={{ color: "blue" }}>{props.rating}</h4>{" "}
        </Div>
        <Div display="flex">
          {" "}
          <Div shaded>{props.pg}</Div>
          <Div shaded>{props.hour}</Div>{" "}
        </Div>
        <Div shaded>{props.category}</Div>
        <h3>plot</h3>
        <p>{props.description}</p>
        <h3>Actors</h3>
        <p>{props.actors_name}</p>
        <h3>Released</h3>
        <p>{props.Released}</p>
        <p>{props.award}</p>
      </Div>
    </Div>
  );
};
MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  // rating:PropTypes.number,
  pg: PropTypes.string,
  posterUrl: PropTypes.string,
};
MovieDetails.defaultProps = {
  title: "movie title",
  rating: 10,
  pg: "pg",
};
export default MovieDetails;
