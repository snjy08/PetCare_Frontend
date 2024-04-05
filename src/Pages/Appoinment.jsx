import React, { useState } from 'react';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { appoinmentAPI } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Appoinment() {
  const location = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    breed: '',
    dogOwner: '',
    phone: '',
    gender: '',
    procedure: '',
    date: '',
    time: ''
  });

  const appointmentData = async () => {
    const { breed, dogOwner, phone, gender, procedure, date, time } = data;
    if (!breed || !dogOwner || !phone || !gender || !procedure || !date || !time) {
      alert('Please fill out all fields before submitting.');
    } else {
      // API call
      const result = await appoinmentAPI(data, id);
      if (result.status === 200 || breed || dogOwner || phone || gender || procedure || date || time) {
        alert('Appointment successfully booked');
        location('/home');
        setData({
          breed: '',
          dogOwner: '',
          phone: '',
          gender: '',
          procedure: '',
          date: '',
          time: ''
        });
      } else {
        alert(result.response.data);
      }
    }
  };

  return (
    <div className=''>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column" style={{ height: '80vh' }}>
          <h4>Appointment Booking</h4>
          <MDBInputGroup className='mb-3'>
            <input onChange={(e) => setData({ ...data, breed: e.target.value })} className='form-control' type='text' placeholder="Breed" />
          </MDBInputGroup>
          <MDBInputGroup className='mb-3' >
            <input onChange={(e) => setData({ ...data, dogOwner: e.target.value })} className='form-control' type='text' placeholder="Dog Owner" />
          </MDBInputGroup>
          <MDBInputGroup className='mb-3'>
            <input onChange={(e) => setData({ ...data, phone: e.target.value })} type="text" className='form-control' placeholder='Phone number' />
          </MDBInputGroup>
          <MDBInputGroup className='mb-3' >
            <input onChange={(e) => setData({ ...data, gender: e.target.value })} className='form-control' placeholder='Gender' type='text' />
          </MDBInputGroup>
          <MDBInputGroup className='mb-3'>
            <input onChange={(e) => setData({ ...data, procedure: e.target.value })} className='form-control' placeholder='Procedure' type='text' />
          </MDBInputGroup>
          <MDBInputGroup className='mb-3'>
            <input onChange={(e) => setData({ ...data, date: e.target.value })} className='form-control' placeholder='Date' type='date' />
          </MDBInputGroup>
          <MDBInputGroup className='mb-3' >
            <input onChange={(e) => setData({ ...data, time: e.target.value })} type="time" placeholder='Time' className='form-control' />
          </MDBInputGroup>
          <div className='justify-content-center d-flex '>
            <MDBBtn onClick={appointmentData} disabled={!data.breed || !data.dogOwner || !data.phone || !data.gender || !data.procedure || !data.date || !data.time}>
              Done
            </MDBBtn>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Appoinment;
