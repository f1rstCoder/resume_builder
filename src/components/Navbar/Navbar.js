import React from 'react';
import PDFFile from '../PDF_File/PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3 mb-5 d-flex justify-content-center">
            <h1 className=" mx-20 text-primary font-weight-bold">RESUME</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <PDFDownloadLink document={<PDFFile />} fileName="Resume">
                            {({ loading }) =>
                                (loading) ? <button className='btn btn-primary btn-sm' disabled>Loading Document</button> : <button className='btn btn-primary'>Download</button>}
                        </PDFDownloadLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar