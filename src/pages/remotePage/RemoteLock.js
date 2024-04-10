import React, { useState } from 'react';
import "../remotePage/remoteLock.css";
import {useNavigate} from "react-router-dom"
const RemoteLock = (props) => {

  // const {data, onLockDevice, onUnlockDevice} = props;
  const navigate = useNavigate();

  const [data, setData] = useState(
    [
      {
        deviceId: "1",
        userName: "santosh"
      },
      {
        deviceId: "2",
        userName: "subha"
      },
      {
        deviceId: "3",
        userName: "dileep"
      },
      {
        deviceId: "4",
        userName: "koti"
      },
      {
        deviceId: "5",
        userName: "santosh"
      },
    ]
  )

  return (
    <div>
        <h1>RemoteLock</h1>
        <button className='btnRemote' onClick={() => navigate("/vehicledetails")}>Go to Home</button>

        <table border={1} style ={{borderCollapse: 'collapse',margin: "10px"}}>
          <thead>
            <tr>
              <th>Device ID</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.deviceId}>
                <td>{item.deviceId}</td>
                <td>{item.userName}</td>
                <td>
                  <button className='btnLock' onClick={() => alert("Your Vehicle will be locked immediatly")}>
                    Lock Device
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
  
}

export default RemoteLock;