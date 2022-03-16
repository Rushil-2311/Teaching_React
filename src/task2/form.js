// Task 1:- ek form banavo jema field hashe
// 1) Employee name
// 2) birthday
// 3) salary
// 4) phone number
// 5) address
// 6) joined date
// 7) working hours
// Aatli vastu enter karavani ane jya date chhe tya proper date picker mukine add karavano data
// Task 2:- aa badho data ek table ma show karavano pachhi e table ma option aapvano last column ma delete ne edit no e bane karvanu
// Task 3) :- e table ni employee name par click kare to ene ek employee name na route par move karavano ane pachhi tya e eni badhi details joi shake
// Task 4:-) table ma searching , sorting karavanu
// Aatlu karo pachhi aagad aama j high level na task aapu

import React, { useState,useMemo } from "react";
import { nanoid } from "nanoid";
import Edit from "../task2/edit.js";
import {DetailState} from '../task2/context.js'
import Data from "../task2/data.js";

const Form = () => {
  const [add, setAdd] = useState({
    id: nanoid(),
    employee_name: "",
    birthday: "",
    salary: "",
    phone_number: "",
    address: "",
    joind_date: "",
    working_hours: "",
  });
  const [item, setItem] = useState([]);
  const [toggleitem, settoggleItem] = useState(null);
  const [edit, setEdit] = useState({
    id: nanoid(),
    employee_name: "",
    birthday: "",
    salary: "",
    phone_number: "",
    address: "",
    joind_date: "",
    working_hours: "",
  });
  const [search, setsearch] = useState("");
  const { detail , setDetail} = DetailState();

    const searchData = useMemo(() => {
    if (!search) return item;

    return item.filter((findItem) => {
      return findItem.employee_name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, item]);

  const sortByEmployeeName = () => {
        const sorted = [...item].sort((a, b) => {
          return a.employee_name > b.employee_name ? 1 : -1;
        });
        setItem(sorted);
        settoggleItem(true);
      };

  const inputEvent = (event) => {
    setAdd({
      ...add,
      [event.target.name]: event.target.value,
    });
  };

  const inputEditEvent = (event) => {
    setEdit({
      ...edit,
      [event.target.name]: event.target.value,
    });
  };
  const addData = (event) => {
    event.preventDefault();
    const newData = {
      id: nanoid(),
      employee_name: add.employee_name,
      birthday: add.birthday,
      salary: add.salary,
      phone_number: add.phone_number,
      address: add.address,
      joind_date: add.joind_date,
      working_hours: add.working_hours,
    };
    setItem((oldItem) => {
      return [...oldItem, newData];
    });
    setAdd({
      employee_name: "",
      birthday: "",
      salary: "",
      phone_number: "",
      address: "",
      joind_date: "",
      working_hours: "",
    });
  };

  const editData = (event) => {
    event.preventDefault();


    const editNewData = {
      id: toggleitem,
      employee_name: edit.employee_name,
      birthday: edit.birthday,
      salary: edit.salary,
      phone_number: edit.phone_number,
      address: edit.address,
      joind_date: edit.joind_date,
      working_hours: edit.working_hours,
    };

    const newD = [...item];
    const index = item.findIndex((item) => item.id === toggleitem);
    newD[index] = editNewData;
    setItem(newD);
    settoggleItem(null);
  };

  const editClick = (event, item) => {
    event.preventDefault();
    settoggleItem(item.id);

    const editData = {
      id: nanoid(),
      employee_name: item.employee_name,
      birthday: item.birthday,
      salary: item.salary,
      phone_number: item.phone_number,
      address: item.address,
      joind_date: item.joind_date,
      working_hours: item.working_hours,
    };
    setEdit(editData);
  };

  const cancleClick= () =>{
    settoggleItem(null)
  }
  const deleteItem = (index) => {
    // console.log(index);
    const updateItems = item.filter((elem) => {
      return index !== elem.id;
    });
    setItem(updateItems);
  };
  return (
    <>
      <form onSubmit={addData} className="submit" required>
        <input
          type="text"
          placeholder="employee name"
          onChange={inputEvent}
          name="employee_name"
          value={add.employee_name}
        />
        <br />
        <input
          type="date"
          placeholder="birthday"
          onChange={inputEvent}
          name="birthday"
          value={add.birthday}
        />
        <br />
        <input
          type="text"
          placeholder="salary"
          onChange={inputEvent}
          name="salary"
          value={add.salary}
        />
        <br />
        <input
          type="text"
          placeholder="phone number"
          onChange={inputEvent}
          name="phone_number"
          value={add.phone_number}
        />
        <br />
        <input
          type="text"
          placeholder="address"
          onChange={inputEvent}
          name="address"
          value={add.address}
        />
        <br />
        <input
          type="date"
          placeholder="Joind Date"
          onChange={inputEvent}
          name="joind_date"
          value={add.joind_date}
        />
        <br />
        <input
          type="text"
          placeholder="Working Hours"
          onChange={inputEvent}
          name="working_hours"
          value={add.working_hours}
        />

        <button>Submit</button>
      </form>

      <div className="table">
        <form onSubmit={editData}>
        <input
          type="text"
          placeholder="Search a Employee name"
          className="search"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          value={search}
        />

<button onClick={sortByEmployeeName}> Sort By Employee Name </button>
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>BirthDay</th>
                <th>Salary</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Joind Date</th>
                <th>Working Hours</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {searchData?.map((item) => (
                <>
                  {toggleitem === item.id ? (
                    <Edit
                      inputEditEvent={inputEditEvent}
                      edit={edit}
                      cancleClick={cancleClick}
                    />
                  ) : (
                    <Data
                      item={item}
                      editClick={editClick}
                      deleteItem={deleteItem}
                      
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Form;
