import React, { Component } from 'react'
import axios from 'axios'
import './Details.css'
import Pug from '../images/pug.jpg'

class Details extends Component {

  state = {
    breed: ''
  }

  componentDidMount() {
    axios.get('https://api.thedogapi.com/v1/breeds')
      .then( response => {
          let data = response.data[3].name
          console.log(data)
      })
  }


    render() {
        return (
            <div className='page'>
              <div className='dog'>Dog Profile</div>

              <div className='profile-container'>
                <div className='left-container'>
                  <div className='profile-pic-container'>
                    <img src={Pug} alt='pug pic' className='profile-pic'></img>
                  </div>

                  <div className='bio'>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus et molestie."
                  </div>
                </div>

                <div className='right-container'>
                  <div className='dog-facts-container'>
                    <div className='dog-facts-title'>DOGNAME is:</div>
                    <div className='dog-facts'>Fun, Loving, Good with Cats, and Playful</div>
                  </div>

                  <div className='breed-facts-container'>
                    <div className='breed-facts-title'>DOGBREED are:</div>
                    <div className='breed-facts'>High Energy, Shedds, Small, and Breathing Issues</div>
                  </div>
                </div>
              </div>

              <div className='button-container'>
                <div className='adopt-button-container'>
                  <button>Adopt Me</button>
                </div>

                <div className='visit-button-container'>
                  <button>Schedule Virtual Visit</button>
                </div>

              </div>
    
            </div>
        );
    }
}

export default Details;
