import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Listview from './Listview/Listview';
import './List.css';

function List(props) {
    let total = 0;
    for ( let itemPrice of props.list ) {
        total += itemPrice.amount;
    }
  return (   
    <div className="list-contents">
        <h2>Desired Donation List</h2>
        {
            props.list.map(listItem => <Listview key={listItem.key} listItem={listItem}></Listview>)
        }
        <h2>Total Item - {props.list.length}</h2> 
        <h1 className="price">Total: <FontAwesomeIcon icon={faDollarSign} /> {total.toFixed(2)}</h1>
    </div>
  );
}

export default List;
