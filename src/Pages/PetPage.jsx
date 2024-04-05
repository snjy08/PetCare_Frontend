import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getParticularPetAPI } from '../Services/allApi';
import { Row } from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { MDBBtn } from 'mdb-react-ui-kit';


function PetPage() {
    const { id } = useParams()
    console.log(id);

    const [pet, setPet] = useState({})
    console.log(pet);
    const getpet = async () => {
        const result = await getParticularPetAPI(id)
        console.log(result.data);
        setPet(result.data)
    }

    useEffect(() => {
        getpet()
    }, [])

    return (
        <div className='m-5' style={{ backgroundImage: 'https://img.freepik.com/premium-photo/group-dogs-are-shown-white-background_780838-1295.jpg' }}>
            <div className="row w-100 d-flex align-items-center justify-content-center vh-100">
                <div className="col-lg-6">
                    <img src={pet.image} width={600} alt="" />

                </div>
                <div className="col-lg-6">
                    <h2>{pet.breed}</h2>
                    <p><b>Age</b>:{pet.age}</p>
                    <p><b>Height</b>:{pet.height}</p>
                    <p><b>Weight</b>:{pet.weight}</p>
                    <p><b>Color</b>:{pet.color}</p>
                    <p><b>Gender</b>:{pet.gender}</p>
                    <p><b>Temperament</b>:{pet.temperament}</p>
                    <p><b>About</b>:{pet.about}</p>
                </div>
                <Link to={'/home'}>
                    <MDBBtn className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        Back
                    </MDBBtn>
                </Link>
            </div>
        </div>
    )
}

export default PetPage
