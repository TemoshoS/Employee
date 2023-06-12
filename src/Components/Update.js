import React, { useState, useEffect } from 'react';
import { useParams , Link, useNavigate } from 'react-router-dom'



const Update = () => {

    const { empid } = useParams();

    //const [empinfo, setEmpinfo] = useState({});

    useEffect(() => {

        fetch('http://localhost:3000/employee/' + empid).then((res) => {
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
    },[]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');

    const navigation = useNavigate();

    const handlesubmit = (event) => {
        event.preventDefault();
        const empinfo = {id,name,email,phone,position};
        

        fetch("http://localhost:3000/employee/" +empid, {

        method: "PUT",
        headers: {"content-type":"application/json"},
        body:JSON.stringify(empinfo)


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
                                            <input value={phone} onChange={event => setPhone(event.target.value)} className="form-control"></input>
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
                                            <input className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to='/' className='btn btn-danger'>back</Link>

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