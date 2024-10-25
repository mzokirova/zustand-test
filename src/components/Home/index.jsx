import { useEffect } from "react";
import { getNews } from "../../utils/zustand"
import NewsCard from "./NewsCard";

const HomeComponent = () => {
    const {news,fetchNews,isLoading,error}=getNews();
    useEffect(() => {
        fetchNews();
    }, [fetchNews]);
    console.log(news)

    if(isLoading){
        return(
            <div>
             <p>Loading....</p>

            </div>
        )
    }
  return (
    <div className="mt-10 mx-auto ">
     <h1 className="text-center text-xl">ALL NEWS</h1>
     <div className="flex  justify-center gap-x-20  mx-auto mt-12 ">
     {
        
     news.map((item)=>(
        <NewsCard key={item._id}
        title={item.title}
        body={item.body}
        author={item?.user}
        date={item.date}
        id={item._id}
        />
     ))}

     </div>
    </div>
  )
}

export default HomeComponent
