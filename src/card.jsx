
const CreateCard = (props) => {
  
  return (
    <div className='card'>
      <h2 className='Title'>{props.titel}</h2>
        <div className='img'> <img src="/img" alt="bild" /></div>
        <h2 className='Author'>{props.Author}</h2>
        <button id="BorrowButton"> {props.Låna} </button>
    </div>
  );
}

export default CreateCard;

