import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Input
} from "reactstrap";
import { fetchMovieAction, addMovieAction } from "./actions";

const ContainerComponent = props => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <section className="p-4">
      <div>
        <Input
          className="mb-3"
          type="text"
          placeholder="Title for the movie"
          value={title}
          onChange={text => setTitle(text.target.value)}
        />
        <Input
          className="mb-3"
          type="text"
          placeholder="Author for the movie"
          value={author}
          onChange={text => setAuthor(text.target.value)}
        />
      </div>
      <div className="mb-3">
        <Button
          className="text-capitalize mr-3"
          color="secondary"
          onClick={props.onFetchMovie}
        >
          fetch movie
        </Button>
        <Button
          className="text-capitalize"
          color="secondary"
          onClick={() => {
            if (title && author) {
              props.onAddMovie({ title, author });
              setTitle("");
              setAuthor("");
            }
          }}
        >
          add new movie
        </Button>
      </div>
      <ListGroup>
        {props.movies
          .sort((a, b) => b.id - a.id)
          .map((item, idx) => (
            <ListGroupItem key={idx}>
              <Card>
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.author}</CardText>
                </CardBody>
              </Card>
            </ListGroupItem>
          ))}
      </ListGroup>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movieReducers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovie: () => {
      dispatch(fetchMovieAction());
    },
    onAddMovie: newMoview => {
      dispatch(addMovieAction(newMoview));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerComponent);
