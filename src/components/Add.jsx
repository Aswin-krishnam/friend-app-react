import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
            <Navbar/>
            <center>
                <h1>Add Student</h1>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Friend Name</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Friend Nick Name</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />


                            </div>
      
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Describe Your friend</label>
                                <textarea name="" id="" className="form-control"></textarea>

                            </div>
                           
                           
                      
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
  )
}

export default Add