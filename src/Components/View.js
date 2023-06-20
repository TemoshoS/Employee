import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';


const View = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState({ data: '' });

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
            setImage(resp.image);


        }).catch((err) => {
            console.log(err.message)
        })
    }, []);


    return (


        <div>
            <section className="vh-100" style={{ background: 'grey' }}>


                
                <div className='container  h-75'>
                    
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    
                        <div className=" col-md-9 ">
                            
                            <div className="card" style={{ borderRadius: 15, width:1000 }}>
                                <div className="card-body p-5">
                                    <div className="d-flex text-black">
                                    
                                    <div >
                                        <img src={`${image}`}
                                                alt="No image" classNameName="img-fluid"
                                                style={{ width: 200,height:280, borderRadius: 10 }} />
                                    </div>



                                        <div className="flex-grow-1 ms-3">

                                            <h5 className="mb-1">
                                            <input value={name} style={{border:'none', textAlign:'center'}}/>
                                            </h5>

                                            <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
                                                <input value={position} style={{border:'none',textAlign:'center'}}/>
                                            </p>

                                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                                style={{ backgroundColor: '#efefef', width:700  }}>


                                                <div>
                                                    <label className="small text-muted mb-1">ID</label>
                                                    <input value={id} style={{border:'none',width:20, backgroundColor:'#efefef',textAlign:'center'}}/>

                                                </div>

                                                <div  >
                                                    <label className="small text-muted mb-1">Email</label>
                                                    <input value={email} style={{border:'none',width:400, backgroundColor:'#efefef',textAlign:'center'}}/>
                                                </div >

                                                <div >
                                                    <label className="small text-muted mb-1">Phone Number</label>
                                                    <input value={phone} style={{border:'none', backgroundColor:'#efefef',textAlign:'center'}}/>
                                                </div>

                                            
                                            </div>

                                        </div>
                                    </div>
                                    <Link to='/' className='button-home'>Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )


}

export default View