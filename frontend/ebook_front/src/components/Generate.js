import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/*function Generate(){
    const [sseData, setSseData] = useState({});
    const navigate=useNavigate();

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:8000/api/generate/');
    
        // Event listener for SSE messages
        eventSource.onmessage = (event) => {
            const eventData = JSON.parse(event.data);
            console.log('Received SSE:', eventData.response_number);
            setSseData(eventData);  // Update state with SSE data
        };
    
        // Event listener for SSE errors
        eventSource.onerror = (event) => {
            if(event.target.readyState === EventSource.CLOSED) {
                console.log('SSE connection closed.');
            }
            else{
                console.error('Error occurred:', event);
            }
            navigate('/Show');
            eventSource.close();
        };
    
        // Cleanup function
       return () => {

            eventSource.close(); // Close the SSE connection when component unmounts
        };
    }, []);

    return(
        <>
        <div>Redirect success</div>
        <div className='text-lg text-white'>{sseData.response_number}</div>
        <span class="loader"></span>
        <div class="w-1/2  bg-gray-200 rounded-full">
        <div class="h-2 bg-blue-500 rounded-full" style={{"width": `${sseData.response_number*8.33}%`}}></div>
        </div>
        </>
    )
}*/

function Generate(){
    const [data,setData]=useState('');

    useEffect(()=>{
        const fetch = async()=>{
            const response= await axios.get('http://localhost:8000/api/getfinal/');
            console.log(response.data);
            setData(response.data.message);
        };
        fetch();
        
    },[]);

    return(
        <div className='text-white'>Redirect success and message=== {data}</div>
    )
}

export default Generate;