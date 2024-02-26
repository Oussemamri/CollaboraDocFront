import React from 'react'

const Service = () => {
  return (
    <section class="services">
    <div class="container">
      <div class="heading">
        <h3>My <span>Services</span></h3>
        <h1>I'm very passionate under about this services</h1>
      </div>
      <div class="services-cards">
        <div class="card">
          <span>01</span>
          <img src="./image/seo.png" alt="" />
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Non neque voluptate esse in nobis eius commodi
            mollitia voluptatem</p>
          <a href="#" class="btn">View Details</a>
        </div>
        <div class="card active">
          <span>02</span>
          <img src="./image/development.png" alt="" />
          <h3>Software Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Non neque voluptate esse in nobis eius commodi
            mollitia voluptatem</p>
          <a href="#" class="btn">View Details</a>
        </div>
        <div class="card">
          <span>03</span>
          <img src="./image/ui-design.png" alt="" />
          <h3>App Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Non neque voluptate esse in nobis eius commodi
            mollitia voluptatem</p>
          <a href="#" class="btn">View Details</a>
        </div>
        <div class="card">
          <span>04</span>
          <img src="./image/artwork.png" alt="" />
          <h3>Graphics Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Non neque voluptate esse in nobis eius commodi
            mollitia voluptatem</p>
          <a href="#" class="btn">View Details</a>
        </div>
        <div class="card active">
          <span>05</span>
          <img src="./image/ui-design (1).png" alt="" / >
          <h3>Ui/Ux Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Non neque voluptate esse in nobis eius commodi
            mollitia voluptatem</p>
          <a href="#" class="btn">View Details</a>
        </div>
        <div class="card">
          <span>06</span>
          <img src="./image/speaker (1).png" alt="" />
          <h3>Digital Marketing</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Non neque voluptate esse in nobis eius commodi
            mollitia voluptatem</p>
          <a href="#" class="btn">View Details</a>
        </div>
      </div>
      <a href="#" class="but"> <i class="fa-regular fa-eye"></i> View All List</a>
    </div>
  </section>  )
}

export default Service