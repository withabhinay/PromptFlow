// "use client";

// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Form from "@components/Form";


// const EditPrompt = () => {
//     const router = useRouter();
//     const SearchParams = useSearchParams();
//     const promptId = SearchParams.get('id');
//     const [submitting, setSubmitting] = useState(false);
//     const [post, setPost] = useState({
//         prompt: '',
//         tag: ''
//     });

//     useEffect(() => {
//         const getPromptDeatils = async () => {
//             const response = await fetch(`/api/prompt/${promptId}`);
//             const data = await response.json();
//             setPost({
//                 prompt: data.prompt,
//                 tag: data.tag
//             });
//         }
//         if(promptId) getPromptDeatils();
//     }, [promptId]);

//     const updatePrompt = async (e)=> {
//         e.preventDefault();  //after submitting we dont want it be reloaded so to void this we need to add this 
//         setSubmitting(true);

//         if(!promptId) return alert('Prompt ID not found');

//         try {
//             const response = await fetch(`/api/prompt/${promptId}`,{
//                 method: 'PATCH',
//                 body: JSON.stringify({
//                     prompt: post.prompt,
//                     tag: post.tag
//                 })
//             });

//             if(response.ok)
//             {
//                 router.push('/')
//             }
//         } catch(error) {
//             console.log(error);
//         } finally {
//             setSubmitting(false);
//         }
//     }

//   return (
//     <Form 
//         type="Edit"
//         post={post}
//         setPost={setPost}
//         submitting={submitting}
//         handleSubmit={updatePrompt}
//     />
//   )
// }

// export default EditPrompt


"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from "@components/Form";

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            if (promptId) {
                const response = await fetch(`/api/prompt/${promptId}`);
                const data = await response.json();
                setPost({
                    prompt: data.prompt,
                    tag: data.tag
                });
            }
        };
        getPromptDetails();
    }, [promptId]);

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) return alert('Prompt ID not found');

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            });

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form 
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    );
};

// Wrap the component in Suspense
const SuspendedEditPrompt = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <EditPrompt />
    </Suspense>
);

export default SuspendedEditPrompt;
