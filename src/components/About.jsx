import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="container about py-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='fw-bold mb-4'>About Us</h1>
                    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet at tempora. Asperiores vel ullam veritatis ratione vero porro aut dignissimos nulla rem nobis, quasi saepe error vitae repellendus sequi officia tempore debitis ut doloribus amet consequatur veniam eveniet eius! Reprehenderit fuga ratione velit modi vero. Possimus, repellat sint culpa repellendus praesentium aut voluptatum ipsa. Molestiae distinctio laudantium corporis earum quaerat, minima in nulla iure nesciunt quis praesentium dolores incidunt dicta quas dolorum nostrum asperiores vel, perspiciatis doloremque aliquam similique sunt. Totam, tempore. Delectus deserunt nostrum distinctio inventore veritatis repellendus, autem eveniet laborum ex unde ducimus velit blanditiis saepe repellat?</p>
                    <NavLink to='/contact' className='btn btn-outline-dark'>Contact Us</NavLink>
                </div>
                <div className="col-md-6">
                    <img src="https://img.freepik.com/free-vector/illustration-with-business-people-concept_23-2148468476.jpg?w=996&t=st=1700062662~exp=1700063262~hmac=4562a324903aea16b8004d88b94ab7bc1f8b4986b778172e12de23223e4aaaea" className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About