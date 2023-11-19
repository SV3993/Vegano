import React from 'react'
import{Link} from 'react-router-dom'
import fb from './logos/fb.jpg'
import is from './logos/insta.jpg'
import ld from './logos/lid.jpg'
import pt from './logos/pt.jpg'
import tw from './logos/tw.jpg'
import wp from './logos/wtsa.jpg'

export default function Footer() {
  return (

    <div className='mt-3'>
      <footer className="text-center text-white responsive" style={{"backgroundColor":"#020119"}}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-4 mr-1">
            {/* Facebook */}
            <button type="button" class="btn btn-outline-success " style={{backgroundColor:"#020119",marginRight:"3px"}}>
              <img src={fb} alt="logo" />
            </button>

            {/* Instagram */}
            <button type="button" class="btn btn-outline-success" style={{backgroundColor:"#020119",marginRight:"3px"}}>
              <img src={is} alt="logo" />
            </button>

            {/* Linkedin */}
            <button type="button" class="btn btn-outline-success" style={{backgroundColor:"#020119",marginRight:"3px"}}>
              <img src={ld} alt="logo" />
            </button>

            {/* Pinterest */}
            <button type="button" class="btn btn-outline-success" style={{backgroundColor:"#020119",marginRight:"3px"}}>
              <img src={pt} alt="logo" />
            </button>



            {/* Twitter */}
            <button type="button" class="btn btn-outline-success" style={{backgroundColor:"#020119",marginRight:"3px"}}>
              <img src={tw} alt="logo" />
            </button>

            {/* Whatsapp */}
            <button type="button" class="btn btn-outline-success" style={{backgroundColor:"#020119",marginRight:"3px"}}>
              <img src={wp} alt="logo" />
            </button>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3"style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
          © 2023 : 
          <Link className="text-white" to="/">www.vegano.com</Link>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  )
}
