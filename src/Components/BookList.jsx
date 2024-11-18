import React from 'react'
import book from "../assets/HH.jpeg"
import useFetch from '../Hooks/useFetch'
import { Link, useLocation } from 'react-router-dom';
import Loading from './Loading';
import useTheme from '../Hooks/useTheme';

export default function BookList() {

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let search = params.get('search');

    let { data : books, loading, error } =  useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ''}`);

    if(error) {
        return <p>{error}</p>
    }
    
    let {isDark} = useTheme();

    return (
        <div>
            {loading && <Loading />}

            {/* book list */}
            {!!books && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
                    
                    {books.map((b) => (
                        <Link to={`/books/${b.id}`} key={b.id}>
                            <div className={`p-4 border min-h-[525px] ${isDark ? 'bg-dcard border-primary' : ''} `} >
                                
                                <img src={book} alt="" />
                                <div className="text-center space-y-2 mt-3">
                                    <h1>{b.title}</h1>
                                    <p>{b.description}</p>
                                    {/* genres */}
                                    <div className="flex flex-wrap">
                                        {b.categories.map(c => (
                                        <span key={c} className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500">{c}</span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </Link>
                        
                    ))}

                </div>
            )}
            {(!books.length && !loading) && <p className='text-center text-xl text-gray-500'>No Search Results Found</p>}

        </div>
    )
}
