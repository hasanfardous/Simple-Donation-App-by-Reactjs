import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import List from '../List/List';
import './Donations.css';

function Donations() {
    const [cards, setCards] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('./datas.JSON')
        .then(res => res.json())
        .then(data => setCards(data))
    }, []);

    const handleAddToListEvent = (card) => {
        const newList = [...list, card];
        setList(newList);
    }
  return (
    <div className="donation-wrapper">
        <div className="cards-wrap">
        {
            cards.map(card => <Card 
                key={card.key} 
                datas={card}
                handleAddToListEvent={handleAddToListEvent}
            >
            </Card>)
        }
        </div>
        <div className="list-wrap">
            <List list={list}></List>
        </div>
    </div>
  );
}

export default Donations;
