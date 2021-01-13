import { useEffect, useState } from 'react';
import { CatConsumer } from '../../providers/CatProvider';
import CatImg from '../../img/kittens.jpeg';
import CatList from './CatList';
import CatForm from './CatForm';

const Cats = ({ cats, getAllCats, addCat }) => {
  
  useEffect( () => {
    getAllCats()
  }, [])

  return(
    <>
      <img src='https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' width='300px' />
      <img src={CatImg} width='300px' />
      <h1>Cats</h1>
      <CatForm addCat={addCat} />
      <CatList cats={cats} />
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