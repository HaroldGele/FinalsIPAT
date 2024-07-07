import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemForm.css';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirst_name] = useState('');
    const [middle_name, setMiddle_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [place_of_birth, setPlace_of_birth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivil_status] = useState('');
    const [height_m, setHeight_m] = useState('');
    const [weight_kg, setWeight_kg] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residential_house_no, setResidential_house_no] = useState('');
    const [residential_street, setResidential_street] = useState('');
    const [residential_brgy, setResidential_brgy] = useState('');
    const [residential_city, setResidential_city] = useState('');
    const [residential_province, setResidential_province] = useState('');
    const [residential_zipcode, setResidential_zipcode] = useState('');
    const [full_address, setFull_address] = useState('');
    const [father_surname, setFather_surname] = useState('');
    const [father_first_name, setFather_first_name] = useState('');
    const [father_middle_name, setFather_middle_name] = useState('');
    const [mother_surname, setMother_surname] = useState('');
    const [mother_first_name, setMother_first_name] = useState('');
    const [mother_middle_name, setMother_middle_name] = useState('');


    useEffect(() => {
        if (item) {
            setFirst_name(item.first_name);
            setMiddle_name(item.middle_name);
            setLast_name(item.last_name);
            setPhone(item.phone);
            setEmail(item.email);
            setDate_of_birth(item.date_of_birth);
            setPlace_of_birth(item.place_of_birth);
            setSex(item.sex);
            setCivil_status(item.civil_status);
            setHeight_m(item.height_m);
            setWeight_kg(item.weight_kg);
            setCitizenship(item.citizenship);
            setResidential_house_no(item.residential_house_no);
            setResidential_street(item.residential_street_no);
            setResidential_brgy(item.residential_brgy);
            setResidential_city(item.residential_city);
            setResidential_province(item.residential_province);
            setResidential_zipcode(item.residential_zipcode);
            setFull_address(item.full_address);
            setFather_surname(item.father_surname);
            setFather_first_name(item.father_first_name);
            setFather_middle_name(item.father_middle_name);
            setMother_surname(item.mother_first_name);
            setMother_first_name(item.mother_first_name);
            setMother_middle_name(item.mother_middle_name);


        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, phone, email, date_of_birth, place_of_birth, sex, civil_status, height_m, weight_kg, citizenship, 
                     residential_house_no, residential_street, residential_brgy, residential_city, residential_province, residential_zipcode, full_address,
                     father_surname, father_first_name, father_middle_name, mother_surname, mother_first_name, mother_middle_name};
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post(`http://localhost:8000/api/items/`, data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>First Name:</label>
                <input type="text" value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Middle Name:</label>
                <input type="text" value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Birthday:</label>
                <input type="date" value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Place Of Birth:</label>
                <input type="text" value={place_of_birth} onChange={(e) => setPlace_of_birth(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Sex:</label>
                    <select value={sex} onChange={(e) => setSex(e.target.value)}>
                         <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
            </div>
            <div className="form-group">
                <label>Civil Status:</label>
                    <select value={civil_status} onChange={(e) => setCivil_status(e.target.value)}>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
            </div>
            <div className="form-group">
                <label>Height_cm:</label>
                <input type="number" value={height_m} onChange={(e) => setHeight_m(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Weight_kg:</label>
                <input type="number" value={weight_kg} onChange={(e) => setWeight_kg(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div className="form-group">
                <label>House no.:</label>
                <input type="text" value={residential_house_no} onChange={(e) => setResidential_house_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Street:</label>
                <input type="text" value={residential_street} onChange={(e) => setResidential_street(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Barangay:</label>
                <input type="text" value={residential_brgy} onChange={(e) => setResidential_brgy(e.target.value)} />
            </div>
            <div className="form-group">
                <label>City:</label>
                <input type="text" value={residential_city} onChange={(e) => setResidential_city(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Province:</label>
                <input type="text" value={residential_province} onChange={(e) => setResidential_province(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Zip Code:</label>
                <input type="text" value={residential_zipcode} onChange={(e) => setResidential_zipcode(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Full Address:</label>
                <input type="text" value={full_address} onChange={(e) => setFull_address(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Father FirstName:</label>
                <input type="text" value={father_first_name} onChange={(e) => setFather_first_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Father MiddleName:</label>
                <input type="text" value={father_middle_name} onChange={(e) => setFather_middle_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Father Surname:</label>
                <input type="text" value={father_surname} onChange={(e) => setFather_surname(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Mother FirstName:</label>
                <input type="text" value={mother_first_name} onChange={(e) => setMother_first_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Mother MiddleName:</label>
                <input type="text" value={mother_middle_name} onChange={(e) => setMother_middle_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Mother Surname:</label>
                <input type="text" value={mother_surname} onChange={(e) => setMother_surname(e.target.value)} />
            </div>
            <div className="button-container">
                <button className="submit-button" type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ItemForm;