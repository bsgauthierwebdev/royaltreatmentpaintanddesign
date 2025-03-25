import React from 'react'
import logo from './assets/Logo.jpg'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './App.css'

const App = () => {
  return (
    <div className = 'App'>
      <div className="container">
        <div className="company">
          <h3>Royal Treatment Paint & Design</h3>
        </div>
        <div className="logo">
          <img src= {logo} alt="Royal Treatment Paint & Design" />
        </div>
        <div className="name">
          <h1>AJ Hendricks</h1>
        </div>
        <div className="title">
          <h2>Painting / Renovation</h2>
        </div>
        <div className="tagline"><p>Call or email for an estimate</p></div>
        <div className="contact">
          <div className="phone">
            <a href = 'tel:+18482347590'>
              <span>
                <LocalPhoneOutlinedIcon fontSize='large' />
              </span>
            </a>
          </div>
          <div className="email">
            <a href = 'mailto:royaltreatmentpaintllc@gmail.com'>
              <span>
                <EmailIcon fontSize='large' />
              </span>
            </a>
          </div>
        </div>
        <div className="online">Check us out online</div>
        <div className="social">
          <div className="instagram">
            <a 
              href = 'https://instagram.com/royaltreatmentpaint' 
              target = '_blank' 
              rel = 'noopener noreferrer'
              onClick = {() => console.log('Clicked')}
            >
              <span>
                <InstagramIcon fontSize='large' />
              </span>
            </a>
          </div>
          <div className="facebook">
            <a 
              href = 'https://www.facebook.com/profile.php?id=61572849072714' 
              target = '_blank' 
              rel = 'noopener noreferrer'
            >
              <span>
                <FacebookIcon fontSize='large' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App