import { useState, useEffect, useMemo } from "react";
import Paginator from 'react-hooks-paginator'


//This is also a paginated page however, it was made using npm package

function PaginatedPage2 (){
    const [post, setPost] = useState([]);
    const pageLimit = 5;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

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

    useEffect(()=>{
        return setCurrentData(post.slice(offset, offset + pageLimit));
    },[offset,post])

    return(
        <>
            <div className="blog-container">
                {
                    currentData.map(item=>{
                    return (
                    <div key={item.id} className="blog-card">
                            <h3 className="title">{item.title}</h3>
                            <p className="blog-body">{item.body}</p>
                        </div>
                        )
                    }) 
                    //: (<p>Loading.....</p>)
                }
            </div>
            <Paginator
        totalRecords={post.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageItemClass={"pageItemClass"}
        pageActiveClass={"pageActiveClass"}
        pageLinkClass={"pageLinkClass"}
      />
        </>
    )
}

export default PaginatedPage2;
