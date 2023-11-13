import { useState, useEffect, useMemo } from "react";
import Pagination from "../components/pagination";

//This is a paginated page however, it was made using custom hook

let PageSize = 5;
function PaginatedPage(){
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

    const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return post.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

    return(
        <div className="blog-container">
            {
                currentTableData.map(item=>{
                   return (
                   <div key={item.id} className="blog-card">
                        <h3 className="title">{item.title}</h3>
                        <p className="blog-body">{item.body}</p>
                    </div>
                    )
                }) 
                //: (<p>Loading.....</p>)
            }
            <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={post.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
        </div>
    )
}

export default PaginatedPage;