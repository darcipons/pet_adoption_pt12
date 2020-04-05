import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'


// class Home extends Component {
//     render() {

    function Home() {
        return (
            <div className="Home">
                <Navbar/>
                <div className="container">
                
                <Jumbotron>
                    <h1>LOVABLE PAWS</h1>
                    <p>
                        Animals have love to give, and pets without homes even moreso.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti porro qui, vel, nobis veritatis quas perferendis in incidunt eveniet possimus adipisci ex odio ab sapiente ducimus eaque? Id, tempora quam.
                    </p>
                    <p>
                    <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                </div>
      
             </div>
            
                );
      }
 

export default Home;
