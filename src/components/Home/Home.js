import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, useCurrentId] = useState(0);
  const dispatch = useDispatch(); 
  useEffect(() => {
      dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
      <Grow in>
          <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                      <Posts setCurrentId={useCurrentId}/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <Form currentId={currentId} setCurrentId={useCurrentId}/>
                  </Grid>
              </Grid>
          </Container>
      </Grow>
   );
}

export default Home;
