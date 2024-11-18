import { useEffect, useState } from "react";

function useFetch(url, method = "GET") {
    let [data,setData] = useState([]);
    let [ postData, setPostData ] = useState(null);
    let [ fetchProof, setFetchProof ] = useState(false);
    let [ loading, setLoading ] = useState(false);
    let [ error, setError ] = useState(null);

    useEffect(() => {
      let abortController = new AbortController();
      let signal = abortController.signal;
      let options = {
        signal,
        method
      }

        
        let fetchData = () => {
            setLoading(true);
            setTimeout(() => {
                fetch(url , options)
                .then(res => {
                if(!res.ok) {
                    throw Error('something went wrong');
                }
                return res.json();
                })
                .then(data => {
                setData(data);
                setFetchProof(true);
                setError(null);
                setLoading(false);
                })
                .catch(e => {
                setError(e.message);
                })
            }, 1000);
        }

        // only Fetching if POST and postData is present
        if(method === "POST" && postData) {
            options = {
                ...options,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(postData)
            }
            fetchData();
        }

        if (method === "GET") {
            fetchData();
        }
        
        //cleanup function
        return () => {
          abortController.abort();
        }

    },[url, postData]);

    return { setPostData ,data , loading , error, fetchProof };

}

export default useFetch;