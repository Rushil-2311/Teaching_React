import React from 'react'
import { Link } from "react-router-dom";
import {DetailState} from '../task2/context.js'

const Data = ({item,editClick,deleteItem}) => {
  const { detail , setDetail} = DetailState();
  return (

     <tr>

    <td><Link to='/detailsPage' onClick={() => {
              setDetail([item])}}>{item.employee_name}</Link></td>
    <td>{item.birthday}</td>
    <td>{item.salary}</td>
    <td>{item.phone_number}</td>
    <td>{item.address}</td>
    <td>{item.joind_date}</td>
    <td>{item.working_hours}</td>
   <td>
       <button onClick={()=>deleteItem(item.id)}>Delete</button>
       <button type="button" onClick={(event)=>editClick(event,item)}>Edit</button>
   </td>
  </tr>
  )
}

export default Data