// import React from 'react'
// import{Link} from 'react-router-dom'
// import fb from './logos/fb.jpg'
// import is from './logos/insta.jpg'
// import ld from './logos/lid.jpg'
// import pt from './logos/pt.jpg'
// import tw from './logos/tw.jpg'
// import wp from './logos/wtsa.jpg'

// export default function Footer() {
//   return (

//     <div className="mt-3">
//     <footer className="text-center text-white bg-dark py-3">
//       <div className="container">
//         <div className="row justify-content-center">
//           {/* Social media buttons */}
//           <div className="col-12 mb-3">
//             <button type="button" className="btn btn-outline-light rounded-circle mx-2">
//               <img src={fb} alt="Facebook" />
//             </button>

//             <button type="button" className="btn btn-outline-light rounded-circle mx-2">
//               <img src={is} alt="Instagram" />
//             </button>

//             <button type="button" className="btn btn-outline-light rounded-circle mx-2">
//               <img src={ld} alt="LinkedIn" />
//             </button>

//             <button type="button" className="btn btn-outline-light rounded-circle mx-2">
//               <img src={pt} alt="Pinterest" />
//             </button>

//             <button type="button" className="btn btn-outline-light rounded-circle mx-2">
//               <img src={tw} alt="Twitter" />
//             </button>

//             <button type="button" className="btn btn-outline-light rounded-circle mx-2">
//               <img src={wp} alt="WhatsApp" />
//             </button>
//           </div>

//           {/* Copyright */}
//           <div className="col-12">
//             <p className="mb-0">
//               © 2023: 
//               <Link className="text-white ms-1" to="/">www.vegano.com</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   </div>

//   )
// }







import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="mt-3" >
      <footer className="text-center text-white py-3" style={{backgroundColor:"rgb(2, 1, 25)"}}>
        <div className="container" >
          <div className="row justify-content-center">
            {/* Social media buttons */}
            <div className="col-12 mb-3">
              <button type="button" className="btn btn-outline-light rounded-circle mx-2">
                <FontAwesomeIcon icon={faFacebook} />
              </button>

              <button type="button" className="btn btn-outline-light rounded-circle mx-2">
                <FontAwesomeIcon icon={faInstagram} />
              </button>

              <button type="button" className="btn btn-outline-light rounded-circle mx-2">
                <FontAwesomeIcon icon={faLinkedin} />
              </button>

              <button type="button" className="btn btn-outline-light rounded-circle mx-2">
                <FontAwesomeIcon icon={faPinterest} />
              </button>

              <button type="button" className="btn btn-outline-light rounded-circle mx-2">
                <FontAwesomeIcon icon={faTwitter} />
              </button>

              <button type="button" className="btn btn-outline-light rounded-circle mx-2">
                <FontAwesomeIcon icon={faWhatsapp} />
              </button>
            </div>

            {/* Copyright */}
            <div className="col-12">
              <p className="mb-0">
                © 2023: 
                <Link className="text-white ms-1" to="/">www.vegano.com</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
