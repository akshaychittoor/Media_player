import React, { useEffect, useState } from 'react'
import { Row , Col } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { getAllVideos } from '../services/Allapi';

function View({uploadVideoStatus}) {
  const[allvideo,setAllvideo]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  
  const getAllVideosFromDB = async()=>{
    const response = await getAllVideos();
    const {data}= response;
    console.log(response);
    setAllvideo(data);
  }
  useEffect(()=>{
    getAllVideosFromDB();
  },[uploadVideoStatus,deleteVideoStatus])
  return (
    <>
       <Row>
        {
          allvideo.length>0?
          allvideo.map((video)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>
        ))
        :
        <p>Nothing to Display</p>
         }
       </Row>
    </>
  )
}
export default View;