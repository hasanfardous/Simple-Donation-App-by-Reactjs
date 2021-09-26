import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Listview.css';

function Listview(props) {
    const {name, img, amount} = props.listItem;
  return (
    <div className="list-view">
      <div>
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
      <p><FontAwesomeIcon icon={faDollarSign} /> {amount}</p>
    </div>
  );
}

export default Listview;
