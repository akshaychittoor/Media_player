import React from 'react'
// import CategoryCard from './CategoryCard';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getVideoDetails } from '../services/Allapi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { getAllCategory } from '../services/Allapi';
import { updateCategory } from '../services/Allapi';
import VideoCard from './VideoCard';
import { Row , Col } from 'react-bootstrap';




function Catergory() {

  const [show, setShow] = useState(false);
  const[AllCategory,setAllCategory]=useState([])
  const[isDelete,setisDelete]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Category,setCategory]=useState({
    id:"",
    categoryName:"",
    allvideos:[]
  })
  
  const uploadCategory = async()=>{
    const{id,categoryName}=Category;
    if(!id || !categoryName){
      // alert("please fill the form completely")
      toast.danger("please fill the fomr completely");
    }
    else{
      const response = await addCategory(Category);
      console.log(response);
      if(response.status==201){
        toast.success(`${response.data.categoryName} is successfully uploaded`);
        handleClose();
        getAllCategoryFromDB();
      }
      else{
        toast.error("Something went wrong");
      }
    }
  }
  const getAllCategoryFromDB = async()=>{
    const response = await getAllCategory();
    const {data}= response;
    setAllCategory(data);
    // console.log(data);
  }
  useEffect(()=>{
     getAllCategoryFromDB();
  },[isDelete])

  const deleteCategoryItem=async(id)=>{
     const response = await deleteCategory(id);
      setisDelete(response)
  }
     const dragOver =(e)=>{
      // to prevent page refresh, by default onDragOver will do page refresh 
      e.preventDefault();
      console.log("drag Over");
     }
     const videoDrop =async(e,id)=>{
      console.log(`video card need to be placed in card with id ${id}`);
      const videoId = e.dataTransfer.getData("video");
      console.log(`video with id ${videoId}need to be placed in category with id ${id}`);
      const response = await getVideoDetails(videoId);
      const {data} =response;
      console.log("video details");
      console.log(data);
      const selectedCategory = AllCategory?.find((item)=>item.id == id)
      console.log("selected category",selectedCategory);
      selectedCategory.allVideos.push(data);
      console.log("=== Selected catergory with dragged video details ===");
      console.log(selectedCategory);
      await updateCategory(id,selectedCategory);
      getAllCategoryFromDB();
     }
  return (
    <>

      {/* <CategoryCard/> */}
      <div>

        <div style={{width:"270px"}} >
          <button className='btn btn-warning' onClick={handleShow}><i class="fa-solid fa-circle-plus ms-2"></i> Add New Category </button>
        </div>
        {
        AllCategory.length>0?
        AllCategory.map((item)=>(
        <div className='d-grid ms-3' droppable onDragOver={(e)=>dragOver(e)}
        onDrop={(e)=>videoDrop(e,item.id)}
        >
          <div className='mt-5 border border-secondary rounded p-3'>
             <div className='d-flex justify-content-between align-item-center'>
              <h6>{item.categoryName}</h6>
              <button className='btn btn-danger ms-2' onClick={()=>deleteCategoryItem(item.id)}>Delete <i class="fa-solid fa-trash "></i></button>
             </div>
             <Row>
              <Col sm={12}>
                {
                  item.allVideos?.length > 0?
                  item.allVideos.map(video=>(<VideoCard displayVideo={video}/>))
                  :
                  <p>No item</p>
                }
              </Col>
             </Row>
          </div>
        </div>
        )):
        <p>Nothing to display</p>
        }
          <Modal
      
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title><i class="fa-solid fa-pencil text-warning me-3"></i> Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please fill the following details</p>
            <Form className='border border-1 p-2'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Category Id" onChange={(e)=>setCategory({...Category,id:e.target.value})} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategory({...Category,categoryName:e.target.value})} />
              </Form.Group>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="warning" onClick={uploadCategory}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>

    </>
  )
}
export default Catergory;