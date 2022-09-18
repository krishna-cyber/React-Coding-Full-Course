
import { useEffect,useState } from "react";
import axios from "axios";


const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setisError] = useState(null);
    
    useEffect(() => {
        const CancelToken = axios.CancelToken;
         const source = CancelToken.source();
        axios.get(url,{cancelToken: source.token})
        .then(res=>{
            if(!res.data){
                throw Error("Could not fetch data for that resource");
            }
            setData(res.data);
            setIsPending(false);
            setisError(null);
        })
        .catch(err=>{
                    if (axios.isCancel(err)) {
                        
        } else {
            // handle error
            setisError(err.message);
                    setIsPending(false);
        }
            })
            return () => {
                source.cancel();
            }
        }, [url])

        
    
    return {data, isPending, isError};
    }



    // exporting useFetch
    export default useFetch;