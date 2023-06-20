import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios'



const Newemployee = () => {

    //const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState({ data: '' })
    const navigation = useNavigate();


    const handleFileChange = (event) => {
        const img = {
            data: URL.createObjectURL(event.target.files[0]),

        }
        setImage(img)
    }

    const data = {

        name: name,
        email: email,
        phone: phone,
        position: position,
        image: image.data
    };

    const subMitForm = (event) => {

        event.preventDefault();
        axios.post("http://localhost:8000/employee", data
        ).then(alert('Saved successfully'), navigation("/"));
    }




    return (

        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container">
                        <div className="container bg-info text-white border py-3 my-3">
                            <h1>Add new employee </h1>
                        </div>
                        <div className="card" style={{ textAlign: "left" }}>

                            <div className="card-body">

                                <div className="row">



                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>NAME & SURNAME</label>
                                            <input required value={name} onChange={event => setName(event.target.value)} className="form-control"></input>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>EMAIL</label>
                                            <input required value={email} onChange={event => setEmail(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>PHONE NUMBER</label>
                                            <input required type='text' pattern='[0-9]{10}' maxLength='10' value={phone} onChange={event => setPhone(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>EMPLOYE POSITION</label>
                                            <input required value={position} onChange={event => setPosition(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>PROFILE PICTURE</label>
                                            <input onChange={handleFileChange} className="form-control" type='file'></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="col-md-12 text-center">
                                                <button className="button-edit" onClick={subMitForm} >Save</button>
                                                <Link to='/' className='button-delete'>Back</Link>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>


    );

}

export default Newemployee;