import React, { useState, useEffect } from 'react';
import { getChuckJoke } from '../services/axiosService';
import { Button, Grid} from '@mui/material';

const ChuckNorris = () => {

  const [joke, setJoke] = useState();
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const obtainJoke = () => {
    getChuckJoke()
      .then((res) => {
        if(res.status === 200) {
          setJoke(res.data.value);
        }
      })
      .catch((err) => {
        alert(`Something went wrong: ${err}`);
      })
  }

  const addLike = () => {
    setLike(like + 1);
  }

  const addDislike = () => {
    setDislike(dislike + 1);
  }

  useEffect(() => {
    obtainJoke();
  }, [like, dislike]) 

  return (
    <div>
      <Grid container spacing={2} style={{textAlign: 'center', justifyContent: 'center' }}>
        <Grid item xs={12}>
          <p><b>{ joke }</b></p>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={ obtainJoke } variant='outlined' color='secondary'>Get a new joke</Button>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={ addLike } variant='contained'>Like {like}</Button>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={ addDislike } variant='contained' color='error'>Dislike {dislike}</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChuckNorris;
