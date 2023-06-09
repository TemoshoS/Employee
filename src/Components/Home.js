import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [emp, setEmployee] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            setEmployee(resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])



    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                </div>
                <div className="card-body">

                    <div>
                        <Link to='/employee/create' className='btn btn-success'>Add Employee</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name and Surname</td>
                                <td>Email address</td>
                                <td>Phone Number</td>
                                <td>Employe Position</td>
                                <td>Image</td>
                            </tr>
                        </thead>
                        <tbody>

                            {  emp &&
                            emp.map(item=>(
                                < tr key={item.id}>
                                
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.position}</td>
                                
                                </tr>
                            ))
                            
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;