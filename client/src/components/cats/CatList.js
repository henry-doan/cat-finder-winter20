import CatShow from './CatShow';

const CatList = ({ cats }) => {
  return(
    <>
      {
        cats.map( c => 
          <CatShow key={c.id} {...c} />
        )
      }
    </>
  ) 
}

export default CatList;