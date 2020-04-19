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
            <Link to="/">
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
            <Link to='/'>
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
            <Link to='/'>
              <Button className="text-center home-btn" >Available Small & Furry</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>

      <div className='happy-news-container'>
          <Container>
            <div className='happy-news-title'>Happy News</div>
            <div className='happy-news-stories'>Adoption Success Stories</div>
            <Row>
              <Col md={6}>
                <img
                alt=""
                src={ Story1Pet }
                width="100%"
                height="100%"
                />
                
              </Col>

              <Col md={6} className='happy-news-article'>Thanks to Sheltering in Place, Animal Shelters Are Empty.A recent pet-adoption boom is the feel-good pandemic story you need right now.THE RIVERSIDE COUNTY Animal Shelter has a beautiful problem: It's all out of adoptable animals. “As you can see, we have a completely empty adoption center,” animal services director Julie Bank says in a video posted Wednesday on the California shelter’s Instagram account.
              <br></br>

              <Link to="www.wired.com/story/coronavirus-pet-adoption-boom/" target='_blank'>
                <Button variant='outline-*' className='article-btn'>Full Article</Button>
              </Link>
              </Col>

            </Row>

            <br/>

            <Row>
              <Col md={6} className='happy-news-article'>NOTES FROM THE VOLUNTEER: Both know some basic commands and seem eager to learn more! Junior and Cascade do get along with other dogs, but may do best not sharing their home with others.
              MORE INFORMATION: You can find Cascade and Junior and other wonderful dogs and cats at the Huntington Cabell Wayne Animal Shelter, located at 1901 James River Road. Currently the shelter is closed to the public due to the COVID-19.
                <br></br>
                <Link to="www.herald-dispatch.com/features_entertainment/adopt-a-pet/article_8e1718ba-6982-5eb5-92f7-4be8f991e914.html" target='_blank'>
                  <Button variant='outline-*' className='article-btn'>Full Article</Button>
                </Link>
              </Col>

              <Col md={6}>
                <img
                alt=""
                src={ Story2Pet }
                width="100%"
                height="100%"
                />
              </Col>
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

              <Col md={6} className='happy-news-article'>Every Single Animal Was Adopted From Chicago Animal Control This Week For The First Time Ever! People stuck at home are rushing to adopt or foster dogs and cats from the city's shelters, but you're not out of luck if you want to help. Thousands of people have applied to foster and adopt dogs and cats at Chicago’s shelters since the stay at home order went into effect March 21. 
              <br></br>
                <Link to="https://blockclubchicago.org/2020/04/08/every-single-animal-was-adopted-from-chicago-animal-control-this-week-for-the-first-time-ever/" target='_blank'>
                  <Button variant='outline-*' className='article-btn'>Full Article</Button>
                </Link>
              </Col>
            </Row>
          
        </Container>
      </div>
    </div>
  );
}

export default Home;
