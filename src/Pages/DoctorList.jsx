import React, { useEffect, useState } from 'react'
import { getAllDoctorsAPI } from '../Services/allApi'
import { MDBBtn, MDBCard , MDBCardImage , MDBCardBody , MDBCardTitle , MDBCardText} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

function DoctorList() {

    const [allDoctors , setAllDoctors] = useState([])
    const getDoctors = async () => {
      const result = await getAllDoctorsAPI()
      console.log(result.data);
      setAllDoctors(result.data)
    }
      useEffect(()=>{
    getDoctors()
      },[])
    

  return (
     
    <div className='row w-100 mt-3 ms-1 ' >

      <h4>Our Doctors</h4>
      {allDoctors.length > 0 ? allDoctors.map((item)=>(
                <div className='col-lg-4 ' style={{height:'650px' }}>
              <MDBCard >
              <MDBCardImage src={item.img} position='top' height={400} width={100} alt='...' />
              <MDBCardBody>
                <MDBCardTitle>Dr.{item.doctor}</MDBCardTitle>
                <MDBCardText>
                  Speciality:{item.speciality}
                </MDBCardText>
                <Link to={`/doctor/${item._id}`}>
                  <MDBBtn>view</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
            </div>
              )) : "empty"
            }
    </div>
  )
}

export default DoctorList