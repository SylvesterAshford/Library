import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useEffect } from "react";
import image from "../assets/WI.jpeg";
import Loading from "../Components/Loading";

function BookDetail() {
    // dynamic id
    let {id} = useParams();
    let url = `http://localhost:3000/books/${id}`; 
    // let url = 'http://localhost:3000/books/'+param.id;
    let { data : book , loading , error , fetchProof} = useFetch(url);

    let navigate = useNavigate();

    useEffect(() => {
        if(error) {
            // redirect to home page
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    },[error, navigate])

    return (
        <div className="h-screen">
            {error && <div>{error}</div>}
            {loading && <Loading/>}
            {console.log(book.categories)}
            
                {fetchProof && (
                    <div className="grid grid-cols-2">
                        <div>
                            <img src={image} alt="" className="w-[80%]" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">{book.title}</h1>
                            <div className="space-x-3">
                                {book.categories.map(category => (
                                    <span className="bg-blue-500 text-white rounded-full text-sm px-2 py-1" key={category}>{category}</span>
                                ))}
                            </div>
                            <p>
                                {book.description}
                            </p>
                        </div>
                    </div>
                )} 
                
            
        </div>
    );
}
  
export default BookDetail;
  