import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState(
        []
    )

    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }

    useEffect(()=>{fetchData()},[])
  return (
    <div>
            <Navbar />

            <center>
                <h3>View All Albums</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Friend Name</th>
                                    <th scope="col">Friend Nick Name</th>
                                    <th scope="col">Friend Describtion</th>
                                    

                                </tr>
                            </thead>

                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>

                                            <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                    

                                        </tr>
                                    </tbody>
                                }
                            )}

                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ViewAll