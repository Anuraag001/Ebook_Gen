import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateForm() {
    const navigate=useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [chapters, setChapters] = useState(0);
    const [authorName, setAuthorName] = useState('');
    const [policy, setPolicy] = useState(false);
    const [alert, setAlert] = useState('');

    // useEffect for SSE connection
    
    const validate = (e) => {
        e.preventDefault();
        if (!(title && description && chapters !== 0 && authorName && policy)) {
            setAlert('Please fill all the fields');
        } else {
            setAlert('');
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        const data = {
            title: title,
            description: description,
            chapters: chapters,
            authorName: authorName,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/setBookDetails/', data);
            console.log(response.data);
            navigate('/generate');
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };

    return (
        <>
            <div className='border-2 p-4 rounded-lg border-black' style={{"height":"fit-content"}}>
                <h2 className="text-2xl font-bold mb-4">Book Details</h2>
                <div id="alerts" className='bg-red-200'>{alert}</div>
                <form onSubmit={validate} className='h-fit'>
                    <div className="mt-4">
                        <input type="text" className="form-input mt-1 w-full rounded-md border-gray-300 border-2" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label htmlFor="title" className="block text-gray-700"></label>
                    </div>
                    <div className="form-floating-label mt-4">
                        <textarea className="form-textarea mt-1 w-full rounded-md border-gray-300 border-2" id="description" rows="3" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <label htmlFor="description" className="block text-gray-700" ></label>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="chapters" className="block text-gray-700"></label>
                        <input type="number" className="form-input mt-1 w-full rounded-md border-gray-300 border-2" id="chapters" placeholder="Enter number of chapters" value={chapters} onChange={(e) => setChapters(e.target.value)} />
                    </div>
                    <div className="form-floating-label mt-4">
                        <input type="text" className="form-input mt-1 w-full rounded-md border-gray-300 border-2" id="authorName" placeholder="Author name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                        <label htmlFor="authorName" className="block text-gray-700"></label>
                    </div>
                    <div className="mt-4 flex items-center">
                        <input type="checkbox" id="policy" className="form-checkbox h-4 w-4 text-indigo-600" checked={policy} onChange={(e) => setPolicy(e.target.checked)} />
                        <label htmlFor="policy" className="ml-2 text-gray-700">I agree to the terms and conditions</label>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600`}>Submit</button>
                    </div>
                </form>
                
            </div>
        </>
    );
}

export default CreateForm;
