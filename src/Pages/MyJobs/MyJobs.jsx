import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import MyCard from "./MyCard";

const MyJobs = () => {
const{user} = useAuth();
const name = user?.displayName;

const[jobs,setJobs] = useState([])   
useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/jobs-title?name=${name}`)
    .then(res => res.json())
    .then( data => setJobs(data) )
    
    } ,[name])

    console.log(jobs);

    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
            {
                jobs?.map(job =><MyCard key={job?._id} job={job} ></MyCard>)
            }
        </div>
        </div>
    );
};

export default MyJobs;