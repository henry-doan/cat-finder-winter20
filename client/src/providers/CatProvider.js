import React, { Component } from 'react';
import axios from 'axios';

export const CatContext = React.createContext();

export const CatConsumer = CatContext.Consumer;

class CatProvider extends Component {
  state = { cats: [] }

  getAllCats = () => {
    axios.get('/api/cats')
      .then( res => {
        this.setState({ cats: res.data })
      })
      .catch( res => {
        console.log(res);
      })
  }

  addCat = (cat) => {
    axios.post('/api/cats', {cat} )
      .then( res => {    
        const { cats } = this.state
        this.setState({ cats: [ res.data, ...cats ]})
      })
      .catch( res => {
        console.log(res);
      })
  }

  render() {
    return(
      <CatContext.Provider value={{
        ...this.state,
        getAllCats: this.getAllCats, 
        addCat: this.addCat,
      }}>
        { this.props.children }
      </CatContext.Provider>
    )
  }
}

export default CatProvider;