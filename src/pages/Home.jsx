import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardDeck, Col, Row, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import DogHome from '../images/dog-home.jpg'
import CatHome from '../images/cat-home.jpg'
import BirdHome from '../images/bird-home.jpg'
import Ferret from '../images/Ferret.jpg'
import Story1Pet from '../images/Story1Pet.jpg'
import Story2Pet from '../images/Story2Pet.jpg'
import Story3Pic from '../images/Story3Pic.jpg'

function Home() {
  return (
    <div>
      <div className='header-container'>
        <div className='header-title'>Loveable Paws</div>
      </div>

      <CardDeck className='home-container'>
        <Card>
          <Card.Img variant="top" src={DogHome} />
          <Card.Body>
            <Card.Title className="text-center">Dogs</Card.Title>
            <Card.Text>
            Adopt a dog because, they're loyal, playful, affectionate, social, great for all ages and make life better.  
            </Card.Text>
            <br></br>
            <Link to='/master'>
              <Button className="text-center home-btn">Available Dogs</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={ CatHome } className='home-img' />
          <Card.Body>
            <Card.Title className="text-center">Cats</Card.Title>
            <Card.Text>
            Adopt a cat because they're clever, curious, clean, have the best purrs, are independent and make life better.
            </Card.Text>
            <br></br>
            <Link to="/master">
              <Button className="text-center home-btn" >Available Cats</Button>
            </Link>
          </Card.Body>
        
        </Card>

        <Card>
          <Card.Img variant="top" src={ BirdHome } />
          <Card.Body>
            <Card.Title className="text-center">Birds</Card.Title>
            <Card.Text>
            Adopt a bird because they're intelligent, great conversationalists, low-maintenance, love company and make life better. 
            </Card.Text>
            <br></br>
            <Link to='/master'>
              <Button className="text-center home-btn">Available Birds</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={ Ferret } className='home-img' />
          <Card.Body>
            <Card.Title className="text-center">Small and Furry</Card.Title>
            <Card.Text>
            Adopt a Small Furry pet because they're cute, entertaining to watch and play with, loving don't eat too much and make life better. 
            </Card.Text>
            <br></br>
            <Link to='/master'>
              <Button className="text-center home-btn" >Available Small & Furry</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>

      <div>
        <hr></hr>
          <Container>
            <h2>Happy News</h2>
            <h3>Adoption Success Stories</h3>
            <Row>
              <Col md={6}>
                <img
                alt=""
                src={ Story1Pet }
                width="100%"
                height="100%"
                // className="d-inline-block align-top"
                />
              </Col>

              <Col md={6}>Thanks to Sheltering in Place, Animal Shelters Are Empty.A recent pet-adoption boom is the feel-good pandemic story you need right now.THE RIVERSIDE COUNTY Animal Shelter has a beautiful problem: It's all out of adoptable animals. “As you can see, we have a completely empty adoption center,” animal services director Julie Bank says in a video posted Wednesday on the California shelter’s Instagram account. She and her coworkers, all wearing masks, throw their arms up and cheer, showing off empty pen after empty pen. A few days earlier, on Sunday, Chicago Animal Care and Control’s Adoptable Pets program had similar news. “CACC has no dogs currently available for adoption,” the shelter told its Facebook followers. “We’ve never typed those words before.” The last adoptable dogs—a “short, squat beefcake” named Penn and a “boisterous babe” named Alley—had found loving homes that day.
              </Col>
              <Card.Footer>
                <Link to="https://www.wired.com/story/coronavirus-pet-adoption-boom/">
                <large className="text-bold">Click to read full article...</large>
                </Link>
              </Card.Footer>
            </Row>

            <br/>

            <Row>
              <Col md={6}>NOTES FROM THE VOLUNTEER: Both know some basic commands and seem eager to learn more! Junior and Cascade do get along with other dogs, but may do best not sharing their home with others.
              MORE INFORMATION: You can find Cascade and Junior and other wonderful dogs and cats at the Huntington Cabell Wayne Animal Shelter, located at 1901 James River Road. Currently the shelter is closed to the public due to the COVID-19. If interested in adopting a dog or cat, call the shelter for an appointment. The phone number is 304-696-5551.
              </Col>

              <Col md={6}>
                <img
                alt=""
                src={ Story2Pet }
                width="100%"
                height="100%"
                />
              </Col>
              <Card.Footer style={{textAlign: "right"}}>
                <Link to="https://www.herald-dispatch.com/features_entertainment/adopt-a-pet/article_8e1718ba-6982-5eb5-92f7-4be8f991e914.html">
                <large>Click to read full article...
                </large>
                </Link>
              </Card.Footer>
            </Row>

            <br/>

            <Row>
              <Col md={6}>
                <img
                alt=""
                src={ Story3Pic }
                width="100%"
                height="100%"
                />
              </Col>

              <Col md={6}>Every Single Animal Was Adopted From Chicago Animal Control This Week For The First Time Ever! People stuck at home are rushing to adopt or foster dogs and cats from the city's shelters, but you're not out of luck if you want to help. Thousands of people have applied to foster and adopt dogs and cats at Chicago’s shelters since the stay at home order went into effect March 21. There’s been so much interest in fostering, in particular, that some shelters haven’t had enough cats and dogs and now have a waiting list of people willing to care for an animal in need.
              </Col>
              <Card.Footer>
                <Link to="https://blockclubchicago.org/2020/04/08/every-single-animal-was-adopted-from-chicago-animal-control-this-week-for-the-first-time-ever/">
                <large className="text-bold">Click to read full article...
                </large>
                </Link>
              </Card.Footer>
            </Row>

            <br/>
        </Container>
      </div>
    </div>
  );
}

export default Home;
