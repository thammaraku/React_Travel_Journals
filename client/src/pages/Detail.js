import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import Maps from "../components/Maps";


function Detail(props) {
  const [clickPlace, setClickPlace] = useState({})

  // When this component mounts, grab the journal with the _id of props.match.params.id
  // e.g. localhost:3000/journals/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getJournal(id)
      .then(res => setClickPlace(res.data))
      .catch(err => console.log(err));
  }, [])

  // console.log(`Details.js clickPlace.lat=${clickPlace.lat}`)
  // console.log(`Details.js clickPlace.lng=${clickPlace.lng}`)

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {clickPlace.place} on {clickPlace.date}
              </h1>
            </Jumbotron>

            <Maps id="map" center={clickPlace.center} place ={clickPlace.place} />

          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>About This Place</h1>
              <p>
                {clickPlace.placeDetail}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Add more Places</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
