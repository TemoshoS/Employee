import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

    const [search, setSearch] = useState('');
    const [emp, setEmployee] = useState(null);
    const navigation = useNavigate();


    const employeeview = (id) => {
        navigation('/employee/view/' + id)

    }


    const employeedelete = (id) => {
        if (window.confirm('are you sure want to delete?')) {

            fetch('http://localhost:8000/employee/' + id, {
                method: "DELETE"

            }).then(() => {
                alert('Removed successfully')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }

    }

    const addchange = () => {
        navigation('/employee/create')
    }

    const employeeupdate = (id) => {
        navigation('/employee/edit/' + id)

    }




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

            <div className="container bg-dark text-white border py-3 my-3">
                <h1>Employee Details</h1>
            </div>
            <div className="card">
    
                <div className="card-body">

                    <div >

                        <button onClick={addchange} className='button-create' style={{ float: 'left' }}>  Add New Employee</button>



                        <input onChange={(event) => setSearch(event.target.value)} className='search' placeholder='search employee' />

                    </div>
                    <table className="table table-bordered">
                        <thead >
                            <tr>
                                <th>ID</th>
                                <th>NAME AND SURNAME</th>
                                <th>EMAIL</th>
                                <th>PHONE NUMBER</th>
                                <th>EMPLOYEE POSITION</th>
                                <th>IMAGE</th>
                                <th>ATCIONS</th>
                            </tr>
                        </thead>
                        <tbody>

                            {emp &&
                                emp.filter((item) => {

                                    return search.toLowerCase() === '' ? item : item.id.toString().toLowerCase().includes(search.toLowerCase())

                                }).map(item => (
                                    < tr key={item.id}>

                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.position}</td>
                                        <td >
                                            <img src={`${item.image}`} style={{ width: 150, height: 150 }} />

                                        </td>


                                        <td>
                                            <a onClick={() => { employeeview(item.id) }} className='button-view'>View</a>
                                            <a onClick={() => { employeeupdate(item.id) }} className='button-edit'>Edit</a>
                                            <a onClick={() => { employeedelete(item.id) }} className='button-delete'>Delete</a>
                                        </td>
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