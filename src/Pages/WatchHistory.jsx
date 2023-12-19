import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHistory } from "../services/Allapi";
import Button from 'react-bootstrap/Button';
import { DeleteHistory } from "../services/Allapi";

function WatchHistory() {
    const [deleteHistoryItem,setDeleteHistory]=useState(false);

    const [history,setHistory]=useState({})
    const getAllHistory=async()=>{
      const response = await getHistory();
      console.log(response);
      setHistory(response.data)
    }
    useEffect(()=>{
          getAllHistory()
    },[deleteHistoryItem])

    const handleDelete=async(id)=>{
        const result=await DeleteHistory(id)
        setDeleteHistory(true)
    }
    return (
        <>
            <div className="container mt-5 d-flex justify-content-between align-item-center mb-5">

                <h3>Watch History</h3>
                <Link to={'/Home'} style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>

            </div>
            <table className="table mt-5 mb-5 container">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caption</th>
                        <th>URL</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    history.length>0?
                    history.map((item)=>(
                
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.caption}</td>
                        <td>{item.embededLink}</td>
                        <td>{item.timeStamp}</td>
                        <td>
                        <Button variant="primary" onClick={()=>handleDelete(item.id)}> 
                          <i class="fa-solid fa-trash"></i>
                        </Button>
                        </td>
                    </tr>
                    ))
                    :
                    <p>No item to display</p>
                    }
                </tbody>
            </table>
        </>

    )
}
export default WatchHistory;