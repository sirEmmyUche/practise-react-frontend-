import { useState, useEffect } from "react";


//This is also a paginated page however, it was made using npm package

function PaginatedPage2 (){
    const [post, setPost] = useState([]);

    useEffect(()=>{
        const fetchPost = async()=>{
            try{
                let data = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!data.ok){
                    console.log("Unable to fetch data");
                }
                else{
                    let res = await data.json();
                    setPost(res);
                    console.log(post)
                }
            }catch(err){console.log(err)}
        }
        fetchPost();
    },[])

    return(
        <>
        <h1>This is the paginated page using npm package</h1>
        </>
    )
}

export default PaginatedPage2;
