import React, { Component } from 'react'


export default class Footer1 extends Component {
  render() {
    return (
      <>  
        <footer className="text-center text-lg-start bg-dark text-muted ">
        
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        
            <div className="me-5 d-none d-lg-block">
            <span>Exams</span>
            </div>
        
            <div>
            <a href className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
                <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
                <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
                <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
                <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
                <i className="fab fa-github" />
            </a>
            </div>

        </section>
        
        <section className>
            <div className="container text-center text-md-start mt-5">
            
            <div className="row mt-3">
            
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />Exams
                </h6>
                <p>
                The idea behind exams is to check our knowledge and understanding. Exams help convincing the person or institution evaluating,
                of our proficiency to answer questions in a particular subject.
                </p>
                </div>
            
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Laravel</a>
                </p>
                </div>
            
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
            
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3" /> Cairo , manial , 24 ST</p>
                <p>
                    <i className="fas fa-envelope me-3" />
                    examinfo2022@gmail.com
                </p>
                <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
                </div>
            
            </div>
        
            </div>
        </section>
        
        </footer>  
        </>
    )
  }
}