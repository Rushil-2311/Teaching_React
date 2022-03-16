import React from "react";

const Edit = ({inputEditEvent,edit,cancleClick}) => {
  return (
    <tr>
      <td>
        <input type="text" placeholder="employee name" name="employee_name"  onChange={inputEditEvent}  value={edit.employee_name}/>
      </td>
      <td>
        <input type="date" placeholder="birthday" name="birthday"  onChange={inputEditEvent} value={edit.birthday}/>
      </td>
      <td>
        <input type="text" placeholder="salary" name="salary"  onChange={inputEditEvent} value={edit.salary}/>
      </td>
      <td>
        <input type="text" placeholder="phone number" name="phone_number"  onChange={inputEditEvent} value={edit.phone_number}/>
      </td>
      <td>
        <input type="text" placeholder="address" name="address"  onChange={inputEditEvent} value={edit.address}/>
      </td>
      <td>
        <input type="date" placeholder="Joind Date" name="joind_date"  onChange={inputEditEvent} value={edit.joind_date}/>
      </td>
      <td>
        <input type="text" placeholder="Working Hours" name="working_hours" onChange={inputEditEvent} value={edit.working_hours}/>
      </td>
      <td><button type="submit">Save</button>
      <button onClick={cancleClick}>Cancle</button>
      </td>
    </tr>
  );
};

export default Edit;
