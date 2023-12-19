import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
        
        <div className="footer d-flex align-item-center justify-content-evenly w-100 mb-5">
        <div style={{width:"400px"}}>
          <h5><i class="fa-solid fa-video text-warning me-2"/>Media Player</h5>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita! Adipisci repellat accusamus aut nam modi. Tempore voluptates corporis autem eveniet sunt, libero unde laboriosam assumenda, sit, pariatur dolor culpa.</h6>
        </div>
        <div>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none'}}>
            <h6>Landing Page</h6>
            </Link>

            <Link to={'./Home'} style={{textDecoration:'none'}}>
            <h6>Home page</h6>
            </Link>

            <Link to={'./History'} style={{textDecoration:'none'}}>
            <h6>Watch History</h6>
            </Link>
        </div>
        <div>
            <h4>Guides</h4>
            <h6>React</h6>
            <h6>React Bootstrap</h6>
            <h6>Bootswatch</h6>
        </div>
        <div>
            <h4>Contact US</h4>
           <div className="d-flex">
                <form action="" className="d-flex">
                    <input className="form-control " type="text" placeholder=" Enter your Email" />
                    <button className="bg-warning ms-3 form-control w-50">subscribe</button>
                </form>
           </div>
           <div className="d-flex justify-content-evenly mt-4 fs-5"> 
            <i class="fa-brands fa-instagram fa-lg"></i>
            <i class="fa-brands fa-twitter fa-lg"></i>
            <i class="fa-brands fa-linkedin fa-lg"></i>
            <i class="fa-brands fa-facebook fa-lg"></i>
        </div>
        </div>
    
           
        </div>
       <div className="text-center"> 
        <p>Copyright &#169; 2023. Media player built with React</p>
        </div>
    </div>
  )
}

export default Footer