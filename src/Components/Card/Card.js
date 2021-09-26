import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

function Card(props) {
    const {name, country, age, totalCount, img, amount} = props.datas;
  return (
    <div className="card">
        <img src={img} alt={name} />
        <div className="card-info">
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Age: {age}</p>
            <p>Required: <FontAwesomeIcon icon={faDollarSign} /> {amount}</p>
            <p><FontAwesomeIcon icon={faUsers} /> {totalCount} people donated yet.</p>
            <button 
                className="add-to-list"
                onClick={() => props.handleAddToListEvent(props.datas)}
            ><FontAwesomeIcon icon={faHandHoldingUsd} /> Donate Now</button>
        </div>
    </div>
  );
}

export default Card;
