import React, { useEffect, useState } from 'react';
import { getAllAppointmentsAPI } from '../Services/allApi';
import Table from 'react-bootstrap/Table';
function HomeAdmin() {
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = async () => {
        try {
            const result = await getAllAppointmentsAPI();
            console.log(result.data);
            setAppointments(result.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);
    return (
        <div className=' d-flex flex-column justify-content-center align-items-center'>
            <h2>Appointments</h2>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            appointments.map((item) => (

                                <tr>

                                    <td>{item.dogOwner}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.doctorId}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default HomeAdmin;
