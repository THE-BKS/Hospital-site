import React, { useState, useEffect } from 'react'
import "./styles.css"

function Dashboard() {
    const [toggle, setToggle] = useState('');
    const [style1, setStyle1] = useState({});
    const [style2, setStyle2] = useState({});
    const [userList, setUserList] = useState([{"username":"Anurag","number":1234567890,"date":"2022-01-12","timing":"09:00 AM - 11:00 AM","message":""},
        {"username":"Anurag","number":1234567890,"date":"2022-01-08","timing":"09:00 AM - 11:00 AM","message":"hello"},
        {"username":"Anurag","number":1234567890,"date":"2022-01-09","timing":"09:00 AM - 11:00 AM","message":""},
        {"username":"Anurag","number":1234567890,"date":"2022-01-10","timing":"09:00 AM - 11:00 AM","message":"gkf hkfd ose sbkj h"},
        {"username":"Anurag","number":1234567890,"date":"2022-01-11","timing":"09:00 AM - 11:00 AM","message":"sdfg gjfhd jgdfjg"}]);

    const handleTime = () => {
        setToggle('time');
        setStyle1({backgroundColor: "lightgray"});
        setStyle2({backgroundColor: "rgb(240, 240, 240)"});
    }

    const handleList = () => {
        setToggle('list');
        setStyle1({backgroundColor: "rgb(240, 240, 240)"});
        setStyle2({backgroundColor: "lightgray"});
    }

    useEffect(()=>{
        fetch("/userList", {method: "GET"})
            .then(response=> response.json())
            .then(result=>{
                setUserList(result);
            })
            .catch(err=>{
                alert('Something went wrong... Please refresh !'+err)
            })
    })

    const showUserList = () => {

        return (
            <div className="dashboard-userList">
                <table className="layout display responsive-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Ph. No</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user, index) =>{
                            return (
                                <tr key={index}>
                                    <td className="index">{index+1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.number}</td>
                                    <td>{user.date}</td>
                                    <td>{user.timing}</td>
                                    {user.message ? <td className="message">{user.message}</td> : null}
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    const showUpdate = () => {

        return (
            <div>
                Update Time
            </div>
        )
    }

    return (
        <div className="dashboard">
            <div className="dashboard-heading">
                <span onClick={handleTime} style={style1}>Update Time</span>
                <span onClick={handleList} style={style2}>Patient's List</span>
            </div>
            {toggle == "time" ? showUpdate() : ''}
            {toggle == "list" ? showUserList() : ''}

        </div>
    )
}

export default Dashboard
