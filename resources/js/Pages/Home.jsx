import { Head, Link, usePage } from "@inertiajs/react";
import Pagination from "../Components/Pagination";
import { useState } from "react";

export default function Home({ posts }) {
    const { flash } = usePage().props;
    const [flashMsg, setFlashMsg] = useState(flash.message);
    const [flashSuccess, setFlashSuccess] = useState(flash.success);
    const{ component } = usePage();
    
    setTimeout(()=>{
        setFlashMsg(null);
        setFlashSuccess(null);
    }, 2000);

    return (
        <>
            <Head title={component} />
            <h1 className="title">Hello</h1>
            {flashMsg && <div className="absolute top-24 right-6 bg-rose-500 
                            p-2 rounded-md shadow-lg text-sm text-white">
                {flashMsg}
            </div>}

            {flashSuccess && <div className="absolute top-24 right-6 bg-green-500 
                            p-2 rounded-md shadow-lg text-sm text-white">
                {flashSuccess}
            </div>}
            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        <Link className="text-link" href={`/posts/${post.id}`}>Read more...</Link>
                    </div>
                ))}
            </div>
            <Pagination links={posts.links} />
            <Link preserveScroll className="block title" href="/">{new Date().toLocaleTimeString()}</Link>
        </>
    );
}
