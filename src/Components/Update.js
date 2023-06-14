import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'



const Update = () => {

    const { empid } = useParams();

    useEffect(() => {

        fetch('http://localhost:8000/employee/' + empid
        ).then((res) => {
            return res.json();
        }).then((resp) => {

            setId(resp.id);
            setName(resp.name);
            setEmail(resp.email);
            setPhone(resp.phone);
            setPosition(resp.position);
            

        }).catch((err) => {
            console.log(err.message)
        })
    }, []);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');

    const navigation = useNavigate();

    const handlesubmit = (event) => {
        event.preventDefault();
        const empinfo = { id, name, email, phone, position };


        fetch("http://localhost:8000/employee/" + empid, {

            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empinfo)


        }).then((res) => {

            alert('edit successfully')
            navigation("/")


        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="container bg-info text-white border py-3 my-3">
                            <h1>Update employee details</h1>
                        </div>

                        <div className="card" style={{ textAlign: "left" }}>


                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name and Surname</label>
                                            <input value={name} onChange={event => setName(event.target.value)} className="form-control"></input>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={event => setEmail(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type='number'  value={phone} onChange={event => setPhone(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee Position</label>
                                            <input value={position} onChange={event => setPosition(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input type='file' className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">

                                            <div className="col-md-12 text-center">
                                                <button className="button-edit" type="submit">Save</button>
                                                <Link to='/' className='button-delete'>back</Link>
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
    )
}

export default Update