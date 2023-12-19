// import React from 'react'

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// import Form from 'react-bootstrap/Form';

// function CategoryCard() {

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);


//     return (
//         <div>
//             <button className='btn btn-warning' onClick={handleShow}><i class="fa-solid fa-circle-plus ms-2"></i> Add New Category </button>


//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title><i class="fa-solid fa-pencil text-warning me-3"></i> Add New Category</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>Please fill the following details</p>
//                     <Form className='border border-1 p-2'>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Control type="" placeholder="Enter Category Id" />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Control type="" placeholder="Enter Category Name" />
//                         </Form.Group>
//                     </Form>

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Cancel
//                     </Button>
//                     <Button variant="warning">Add</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }
// export default CategoryCard;