import React, { useEffect } from 'react'
import { useState } from 'react';
import useFetch from '../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import useTheme from '../Hooks/useTheme';

export default function Create() {

    let [title , setTitle] = useState('');
    let [description, setDescription] = useState(''); 
    let [newCategory, setNewCetegory] = useState(''); 
    let [categories, setCategories] = useState([]);

    let {setPostData, loading, fetchProof} = useFetch('http://localhost:3000/books', 'POST');

    let {isDark} = useTheme();

    let addCategory = (e) => {

        if(newCategory && categories.includes(newCategory)) {
            setNewCetegory('');
            return;
        }

        setCategories(prev => [newCategory, ...prev])
        setNewCetegory('')    
    }

    let addBook = (e) => {
        e.preventDefault();
        let data = {
            title,
            description,
            categories
        }
        setPostData(data);
    }

    let navigate = useNavigate();
    
    useEffect(() => {
            if (fetchProof) {
                navigate('/');
            }
    },[fetchProof])

    return (
        <div className='h-screen'>
            <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
                
                    
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`} htmlFor="grid-password">
                            Book Title
                        </label>
                        <input value={title} onChange={e =>  setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Book Title"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`} htmlFor="grid-password">
                            Book Description
                        </label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Book Description"/>
                        <p className={`text-gray-600 text-xs italic ${isDark ? 'text-white' : ''}`}>Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`} htmlFor="grid-password">
                            Categories 
                        </label>
                        <div className="flex items-center space-x-2 ">
                            <input value={newCategory} onChange={e => setNewCetegory(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Book Category"/>
                            <button onClick={addCategory} type='button' className='bg-primary p-1  rounded-lg mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white p-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    
                    <div className="flex flex-wrap">
                        {categories.map(c => (
                            <span key={c} className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-primary">{c}</span>
                        ))}
                    </div>
                    

                </div>
                <button className='text-white bg-primary px-3 py-2 rounded-2xl flex justify-center items-center gap-2 w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <span className="hidden md:block">Create Book</span> 
                </button>
                
                {loading && <Loading />}
            </form>
        </div>
    )
}
