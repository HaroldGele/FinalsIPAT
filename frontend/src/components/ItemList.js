import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemForm.css';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, Items] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            Items(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div className="list-container">
            <h1>Items</h1>
            <ul className="item-list">
                {items.map(item => (
                    <li key={item.id} className="item-list-entry">
                        <span>
                              {item.first_name}<br></br>
                              {item.middle_name}<br></br>
                              {item.last_name}<br></br>
                              {item.phone}<br></br>
                              {item.email}<br></br>
                              {item.date_of_birth}<br></br>
                              {item.place_of_birth}<br></br>
                              {item.sex}<br></br>
                              {item.civil_status}<br></br>
                              {item.height_m}<br></br>
                              {item.weight_kg}<br></br>
                              {item.citizenship}<br></br>
                              {item.residential_house_no}<br></br>
                              {item.residential_street}<br></br>
                              {item.residential_brgy}<br></br>
                              {item.residential_city}<br></br>
                              {item.residential_province}<br></br>
                              {item.residential_zipcode}<br></br>
                              {item.full_address}<br></br>
                              {item.father_first_name}<br></br>
                              {item.father_middle_name}<br></br>
                              {item.father_surname}<br></br>
                              {item.mother_first_name}<br></br>
                              {item.mother_middle_name}<br></br>
                              {item.mother_surname}<br></br>
                        </span>
                        <div className="button-container">
                            <button className="edit-button" onClick={() => onEdit(item)}>Edit</button>
                            <button className="delete-button" onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;