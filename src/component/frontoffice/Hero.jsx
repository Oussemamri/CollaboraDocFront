import React from 'react'

const hero = () => {
  return (

    <>
          <section className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="row">
        <img src="/public/Documents (1).gif" alt="Your GIF" />
          <div className="content">
            <div className="social-link">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-dribbble"></i></a>
            </div>
            <div className="text">
              <h3>Welcome to Our Document Management Platform!</h3>
              <h1>Streamlining Your Document Workflow.</h1>
              <p>Empowering efficient document organization and collaboration. Whether for personal or professional use, we tailor our solution to meet your needs. Explore our features and experience the difference.</p>
              <div className="button">
                  <a href="#" className="btn info"><i className="fa-solid fa-arrows-up-down-left-right"></i>LEARN MORE</a>
                  <a href="#" className="btn"><i className="fa-solid fa-boxes-stacked"></i>VIEW DEMO</a>
              </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default hero