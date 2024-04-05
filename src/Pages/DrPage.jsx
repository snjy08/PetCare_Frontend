import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getParticularDrAPI } from '../Services/allApi';
import { MDBBtn } from 'mdb-react-ui-kit'

function DrPage() {
  const { id } = useParams()
  console.log(id); 

  const [doctor , setdoctor] = useState({})
  console.log(doctor); 

  const getdoc = async()=>{
    const result = await getParticularDrAPI(id)
    console.log(getdoc); 
    setdoctor(result.data)
  }

  useEffect(()=>{
  getdoc()
  },[])
  return (
    <div className='' >
       <div className='d-flex justify-content-end mt-5 me-5 '>
       <Link to={'/doctor'}>
        <MDBBtn className='me-5'> 
          Back
        </MDBBtn>
        </Link>
       </div>
    <div className='row w-100 d-flex align-items-center justify-content-center m-5' style={{height:'80vh'}}>
        <div className='col-lg-6 '>
       
            <img src={doctor.img} width={600} height={600} alt="" />
        </div>
        <div className='col-lg-6'>
             <h2>Dr {doctor.doctor}</h2>
             <p><b>Speciality:</b>{doctor.speciality}</p>
             <p><b>Qualification:</b>{doctor.qualification}</p>
             <p><b>Experience:</b>{doctor.experience}</p>
             <p><b>Clinic Name:</b>{doctor.clinic_name}</p>
             <p><b>Location:</b>{doctor.location}</p>
             <p><b>Working Days:</b>{doctor.working_days}</p>
             <p><b>Working Time:</b>{doctor.working_time}</p>
             <div className='mt-2'> 
        <Link to={`/appointment/${doctor._id}`}> 
        <MDBBtn>
          BOOK NOW 
        </MDBBtn></Link>
        </div>
        </div>
       
     
    </div>
    </div>
  )
}

export default DrPage