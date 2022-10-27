import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Admin() {
    return(
        <div className="container container-admin">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="form-group">
                        <h2 className="text-center">ADMIN</h2>
                    </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Usuário" />
                    </div>
                </div>

                <div className="col-md-12 d-flex justify-content-center pt-3">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Senha" />
                    </div>
                </div>

                <div className="col-md-12 d-flex justify-content-center pt-3">
                    <div className="form-group">
                        <Link to="/admin/home"><button className="btn btn-primary w-100">Logar</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;