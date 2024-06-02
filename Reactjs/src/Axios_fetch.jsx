import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const Axios_fetch = () => {
    const [apiData, setApiData]=useState('')
    useEffect(() =>{
        async function callApi(){
            const apiResult =await axios.get('https://jsonplaceholder.typicode.com/posts');
            setApiData(apiResult.data)
        }
        callApi()
    },[apiData])
    return(
        <div>
        <table><thead>
            <tr>
                <td><b><center>Id</center></b></td>
                <td><b><center>Title</center></b></td>
                <td><b><center>Body</center></b></td>
            </tr>
            </thead>
            <tbody>
                {
                  apiData &&  (apiData).map((apiDetails, index) => {
                        return(
                            <tr key={index}>
                                <td>{apiDetails.id}</td>
                                <td>{apiDetails.title}</td>
                                <td>{apiDetails.body}</td>
                            </tr>
                        )
                  })
                }  
            </tbody>
        </table>
        </div>
    );
}

export default Axios_fetch;