import { useEffect, useState } from 'react';
import { CatConsumer } from '../../providers/CatProvider';

const Cats = ({ cats, getAllCats }) => {
  
  useEffect( () => {
    getAllCats()
  }, [])

  return(
    <>
    <h1>Cats</h1>
    </>
  )
}

const ConnectedCats = (props) => (
  <CatConsumer>
    { value => (
      <Cats {...props} {...value} />
    )}
  </CatConsumer>
)

export default ConnectedCats;