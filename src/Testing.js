import React, { useEffect, useState } from "react";
import "./Testing.css";
import { FaStar } from "react-icons/fa";

export default function Testing() {
    const [Star,SetStar]=useState(0)
    const HandleStarClick=(e)=>{
        SetStar(e)
        // console.log(e)
    }
  return (
    <>
      <div className="_3_2">
        <div className="mx-0 mx-sm-auto ">
          <div className="card  _3_2_1">
            <div className="card-body">
              <form className="px-2" action="">
                <p className="text-center h4">
                  <strong>How do you rate customer support:</strong>
                </p>

                <ul className="h2 pb-9 feedlist">
                  <li>
                    <i className="bad" style={{color:Star > 0 && "#f7cf54" }} value={1} onClick={()=>HandleStarClick(1)} title="Bad" >
                      <FaStar />
                    </i>
                  </li>
                  <li>
                    <i className="poor" style={{color:Star > 1 && "#f7cf54"}} onClick={()=>HandleStarClick(2)} title="Poor">
                      <FaStar />
                    </i>
                  </li>
                  <li>
                    <i className="ok" style={{color:Star > 2 && "#f7cf54"}} onClick={()=>HandleStarClick(3)} title="OK">
                      <FaStar />
                    </i>
                  </li>
                  <li>
                    <i className="good" style={{color:Star > 3 && "#f7cf54"}} onClick={()=>HandleStarClick(4)} title="Good">
                      <FaStar />
                    </i>
                  </li>
                  <li>
                    <i className="excellent" style={{color:Star > 4 && "#f7cf54"}} onClick={()=>HandleStarClick(5)} title="Excellent">
                      <FaStar />
                    </i>
                  </li>
                </ul>

                <p className="text-center h4">
                  <strong>What could we improve?</strong>
                </p>

                <div className="form-outline mb-4">
                  <textarea
                    className="form-control  _3_2_2"
                    id="form4Example6"
                    rows="4"
                  ></textarea>
                  <label className="form-label" for="form4Example6">
                    Your feedback
                  </label>
                </div>
              </form>
            </div>
            <div className="card-footer text-end">
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
