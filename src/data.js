import { useState } from "react";
import "./Form.css";
import FormSuccess from "./FormSuccess";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

const [dataState, setDatastate] = useState([]);

const readData = async () =>{
    const querySnapshot = await getDocs(collection(db, "DataSample"));
    const dataformFB = [];
    querySnapshot.forEach((doc) => {
        dataformFB.push(doc.data());
    });
    setDatastate(dataformFB);
}

return (
    <div>
        {dataState.map((e)=>{
                <div>
                    <p>{e.emailId}</p>
                    <p>{e.firstName}</p>
                    <p>{e.lastName}</p>
                    <p>{e.mobileNo}</p>
                    <p>{e.password}</p>
                    <p>{e.confirmPassword}</p>
                    <p>{e.age}</p>
                    <p>{e.gender}</p>

                    <button className='form-input-btn-db' onClick={readData} type="submit" href="react-form\src\data.js" >get data</button>
                </div>
            })}
    </div>
)