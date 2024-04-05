import React, { useState } from 'react';
import { adminLoginAPI } from '../Services/allApi';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const location = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await adminLoginAPI(formData);
            console.log(result.data);
            alert(result.data);
            location('/adminHome')
        } catch (error) {
            console.error('Login error:', error.response.data);
        }
    };

    return (
        <div>
            <section className="d-flex justify-content-center align-items-center gradient-custom" style={{ height: "800px" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                    type="password"
                                                    id="typePasswordX"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            </div>

                                            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                            <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        </form>

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdminLogin;
