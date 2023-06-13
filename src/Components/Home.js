import React, { useEffect, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';


const Home = () => {

    const [search, setSearch] = useState('');


    const navigation = useNavigate();
    const employeedelete = (id) => {
         if(window.confirm('are you sure want to delete?')){

            fetch('http://localhost:8000/employee/' +id,{
                method: "DELETE"
               
            }).then((res)=>{
                alert('Removed successfully')
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message)
            })
         }

    }

    const employeeupdate = (id) => {
        navigation('/employee/edit/'+id)

    }

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
                        <Link to='/employee/create' className='button-create'>Add Employee</Link>
                    </div>
                    <input onChange={(event) => setSearch(event.target.value)} placeholder='search employee'/>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>Name and Surname</th>
                                <th>Email address</th>
                                <th>Phone Number</th>
                                <th>Employe Position</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {emp &&
                                emp.filter((item) =>{
                                    return search.toLowerCase()===''? item: item.name.toLowerCase().includes(search);
                                }).map(item => (
                                    < tr key={item.id}>

                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.position}</td>
                                        <td >
                                            

                                            <img src={`${item.image}`} style={{width:150, height:150}}/>
                                            
                                            </td>

                                        
                                        <td><a onClick={() => { employeeupdate(item.id) }} className='btn btn-success'>edit</a>
                                            <a onClick={() => { employeedelete(item.id) }} className='btn btn-danger'>Delete</a>

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