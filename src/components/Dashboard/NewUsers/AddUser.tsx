import React, { useState } from 'react';
import { FormStyle } from '../../Styles/Styles';
import CrudService from '../Services/CrudService';



interface AddUserProps {



}

const AddUser: React.FC<AddUserProps> = () => {
    const [submit, setSubmit] = useState(false)
    const [user, setUser] = useState({
        id: null,
        date: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        students: '',

    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = () => {
        var data = {
            date: user.date,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            students: user.students
        }

        CrudService.create(data)
            .then(res => {
                setUser({
                    id: res.data.id,
                    name: res.data.title,
                    email: res.data.email,
                    phone: res.data.phone,
                    address: res.data.address,
                    students: res.data.students,
                    date: res.data.date

                });
                setSubmit(true);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }


    const newCustomer = () => {
        setUser({
            id: null,
            date: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            students: '',
        });

        setSubmit(false);
    }






    return (
        <div className="submit_user">
            {
                submit ?
                    (<div className="success_message">
                        <p>Customer added successfully</p>
                        <button className="btn" onClick={newCustomer}>Add New Customer</button>
                    </div>)
                    :
                    (

                        <div className="add_user">
                            <FormStyle>

                                <label htmlFor="date">Date joined</label>
                                <input
                                    type="date"
                                    className="form-input"
                                    id="date"
                                    required
                                    value={user.date}
                                    onChange={handleInputChange}
                                    name="date"
                                />


                                <label htmlFor="title">Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    id="name"
                                    required
                                    value={user.name}
                                    onChange={handleInputChange}
                                    name="name"
                                />

                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    id="email"
                                    required
                                    value={user.email}
                                    onChange={handleInputChange}
                                    name="email"
                                />

                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    id="phone"
                                    required
                                    value={user.phone}
                                    onChange={handleInputChange}
                                    name="phone"
                                />

                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    id="address"
                                    required
                                    value={user.address}
                                    onChange={handleInputChange}
                                    name="address"
                                />

                                <label htmlFor="students">Students</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    id="students"
                                    required
                                    value={user.students}
                                    onChange={handleInputChange}
                                    name="students"
                                />

                                <button className="btn" onClick={saveUser}>Add to Customers</button>
                            </FormStyle>
                        </div>
                    )


            }

        </div >
    );
}

export default AddUser;