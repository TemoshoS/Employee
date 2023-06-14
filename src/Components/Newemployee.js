import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Newemployee = () => {

    //const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');

    const navigation = useNavigate();
  
    //handling images
    const handleImage = async(event) => {

      setImage(event.target.files[0])
       
    }

    const handleUpload =() => {

        if (image) {

            const formData = new FormData();
            formData.append('image', image);
            fetch("http://localhost:8000/employee", {

            method: "POST",
            body: formData

        }).then((res) => {

        }).catch((err) => {
            console.log(err.message)
        })

        }
    }

    



    const handlesubmit = (event) => {
        event.preventDefault();
        const empinfo = { name, email, phone, position};


        fetch("http://localhost:8000/employee", {

            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empinfo)


        }).then((res) => {

            alert('save successfully')
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
                            <h1>Add new employee </h1>
                        </div>
                        <div className="card" style={{ textAlign: "left" }}>

                            <div className="card-body">

                                <div className="row">

                                    

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name and Surname</label>
                                            <input required value={name} onChange={event => setName(event.target.value)} className="form-control"></input>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required  value={email} onChange={event => setEmail(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input required type='text' pattern='[0-9]{10}' maxLength='10' value={phone} onChange={event => setPhone(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Employee Position</label>
                                            <input required value={position} onChange={event => setPosition(event.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input onChange={handleImage} name='file' className="form-control" type='file'></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="col-md-12 text-center">
                                                <button className="button-edit" onClick={handleUpload } >Save</button>
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