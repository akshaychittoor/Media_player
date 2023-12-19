import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigateByUrl = useNavigate();
    return (
        <div>

            <Navbar className="bg-body-tertiar bg-dark">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: "white",fontSize:"24px" }}onClick={()=>navigateByUrl('/Landing')}><i class="fa-solid fa-video text-warning me-2"></i>Media Player</Navbar.Brand>
                </Container>
            </Navbar>
            
        </div>
    )
}
export default Header;