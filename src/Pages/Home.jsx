import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { getAllDoctorsAPI, getAllPetsAPI } from '../Services/allApi';
import { Link } from 'react-router-dom';
import DoctorList from './DoctorList';


function Home() {

  const [allPets, setAllPets] = useState([])

  const [searchKey, setSearchKey] = useState('')

  console.log(searchKey);

  const getPets = async () => {
    const result = await getAllPetsAPI(searchKey)
    console.log(result.data);
    setAllPets(result.data)
  }
  useEffect(() => {
    getPets()
  }, [searchKey])



  return (
    <div>
      {/* BANNER */}
      <div>

        <img style={{ height: '80vh', overflowX: 'hidden' }}
          src="https://img.freepik.com/premium-photo/close-up-golden-retriever-dog-with-pastel-background-dog-fashion-photo-generative-ai_796128-1795.jpg?w=1380" alt="" />
      </div>

      <div className='inneroverlay'>
        <h1 color='white'>"Happiness <br /> <br /> Is A Warm Puppy"</h1>
      </div>

      <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <input type="search" className='form-control mt-5 ' style={{ width: '400px' }} placeholder='search' onChange={e => setSearchKey(e.target.value)} />
      </div>
   

        <div className='mt-5'>
          <div className='row m-4'>
            {allPets.length > 0 ? allPets.map((items) => (
              <div style={{}} className='col-lg-3'>
                <MDBCard className='mt-4'>
                  <MDBCardImage src={items.image} position='top' width={300} height={300} alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle>{items.breed}</MDBCardTitle>
                    <MDBCardText>
                      {items.about.slice(0, 60)}...
                    </MDBCardText>
                    <Link to={`/home/${items._id}`}>
                      <MDBBtn href='#'>view</MDBBtn>
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </div>
            )) : "empty"
            }

          </div>
        </div>

      </div>
      )
}

      export default Home