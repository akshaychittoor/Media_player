import { useState } from 'react';
import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/Allapi';

function VideoCard({displayVideo,setDeleteVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    
    // call function to store details to watch history
    const {caption,embededLink}=displayVideo;
    console.log("video details");
    console.log(caption);
    console.log(embededLink);
    const today =new Date;
    const timeStamp = new Intl.DateTimeFormat('en-us',{
      year:"numeric",
      month:"2-digit",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit"
    }).format(today)
    console.log(timeStamp);
    // console.log(today);
    let videoDetails={
      caption:caption,
      embededLink:embededLink,
      timeStamp:timeStamp

    }
    await addToHistory(videoDetails)
  };

  const removeVideo = async(id)=>{
    const response=await deleteVideo(id);
    console.log(response);
    setDeleteVideoStatus(true);
  }

  const dragStart=(e,id)=>{
    console.log(`video card with id ${id}started dragging`);
    e.dataTransfer.setData("video",id)
  }
  return (
    <div>
         <Card style={{ width: '100%',height:"350px" }} className='mt-5 mb-5' draggable onDragStart={(e)=>dragStart(e,displayVideo.id)}>
      <Card.Img variant="top" height="285px" src={displayVideo.url} onClick={handleShow} />
      <Card.Body>
       <div className='d-flex align-item-center justify-content-evenly'>
            <h6 className='mt-2'>{displayVideo.caption}</h6>
               <Button className=' bg-danger' onClick={()=>removeVideo(displayVideo.id)}> 
               <i class="fa-solid fa-trash"></i>
               </Button>
       </div>
      </Card.Body>
    </Card>

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {displayVideo.embededLink} */}
        <iframe width="100%" height="400" src={displayVideo.embededLink} title="Unakku Thaan - Music Video | Chithha | Siddharth | Santhosh Narayanan | Deeraj Vaidy | Etaki" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default VideoCard;