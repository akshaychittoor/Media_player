import { serverURL } from "./ServerURL";
import commonAPI from "./CommonAPI";

//  to upload a video
const uploadAllVideo = async (reqBody)=>{
 return   await commonAPI('POST',`${serverURL}video`,reqBody);
}
export default uploadAllVideo;

//  to get all video already inserted
export const getAllVideos = async ()=>{
    return await commonAPI('GET',`${serverURL}video`,"")
}
//  to delete a specific video
export const deleteVideo = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}video/${id}`,{})
}
//  add details to watch history
export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}history`,videoDetails)
}
//  get all details of watch history
export const getHistory =async()=>{
    return await commonAPI('GET',`${serverURL}history`,"")
}
//  to delete a specific history
export const DeleteHistory = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}history/${id}`,{})
}
//  add category
export const addCategory = async (reqBody)=>{
    return   await commonAPI('POST',`${serverURL}category `,reqBody);
}
//  get all category
export const getAllCategory =async()=>{
    return await commonAPI('GET',`${serverURL}category`,"")
}
// delete category
export const deleteCategory =async(id)=>{
    return await commonAPI('DELETE',`${serverURL}category${id}`,{})
}
//  get video details with video id 
export const getVideoDetails = async (id)=>{
    return await commonAPI('GET',`${serverURL}video/${id}`,"")
}
//  update category with video details
export const updateCategory =async (id,body)=>{
    return await commonAPI('PUT',`${serverURL}category/${id}`,body)
}