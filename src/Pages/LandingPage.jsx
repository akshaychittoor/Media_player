import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='container mb-5 mt-5'>
            <Row className='d-flex align-item-center justify-content-evenly'>
                <Col>
                    <h3>Welcome to <span className='text-warning'>Media player</span></h3>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                        iure ipsa debitis at cum est! Magni repellat voluptates,
                        magnam facilis ex totam voluptatem nisi dolore aperiam
                        reiciendis laboriosam porro cumque?
                    </p>
                    <Link to={'/Home'} style={{textDecoration:'none'}}>
                    <button className='btn-warning mt-5 form-control w-25' >Get Started <i class="fa-solid fa-arrow-right ms-2 " ></i></button>
                    </Link>
                </Col>

                <Col>
                    <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{ height: "300px", marginLeft: "200px" }} />
                </Col>
            </Row>
            <div className='container'>
                <h3>Features</h3>
                <div className='d-flex align-item-center justify-content-evenly'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
                <Row className='d-flex align-items-center justify-content-evenly'>
                    <div className='col-md-6'>
                             <h2 className='text-warning'>Simple and Powerfull</h2>
                             <p style={{color:"white"}}><span className='fw-bolder fs-5'>Play eveything :</span><span>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Voluptate reprehenderit inventore, qui in, exercitationem maxime asperiores neque temporibus 
                                 mollitia quos corrupti illum architecto sint numquam nisi! Eum ab necessitatibus totam.
                                 </span></p>

                                 <p style={{color:"white"}}><span className='fw-bolder fs-5'>Play eveything :</span><span>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Voluptate reprehenderit inventore, qui in, exercitationem maxime asperiores neque temporibus 
                                 mollitia quos corrupti illum architecto sint numquam nisi! Eum ab necessitatibus totam.
                                 </span></p>

                                 <p style={{color:"white"}}><span className='fw-bolder fs-5'>Play eveything :</span><span>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Voluptate reprehenderit inventore, qui in, exercitationem maxime asperiores neque temporibus 
                                 mollitia quos corrupti illum architecto sint numquam nisi! Eum ab necessitatibus totam.
                                 </span></p>
                    </div>
                    <div className='col-md-6'>

                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/udsf9yMdOXk" 
                    title="BTech - Ya Illahi Video Song | Asif Ali | Rahul Raj | Mridul Nair | Maqtro" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
                </Row>
            </div>
        </div>
    )
}
export default LandingPage;