import { ArrowLeftIcon } from 'lucide-react';
import {useState} from 'react';
import {Link ,useNavigate} from 'react-router';
import api from '../lib/axios';

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        if(!title.trim() || !content.trim()){
            toast.error("Title and content are required");
            setLoading(false);
            return;
        }

        setLoading(true);
        try{
            await api.post("/notes", ({title: title, content: content}));
            navigate("/");
        }
        catch(error){
            console.error("Error creating note:", error);
            if(error.response?.status === 429){
                toast.error("You are being rate limited. Please wait and try again.", {
                    duration: 4000,
                    icon: "💀"
                });
            }
            toast.error("Failed to create note. Please try again.");
        }
    }
  return (
    <div className="min-h-screen bg-base-200">
        <div className="max-w-2xl mx-auto">
            <div className="max-w-2xl mx-auto">
                <Link to={"/"} className="btn btn-ghost mb-6">
                    <ArrowLeftIcon className="size-5" /> Back to Notes
                </Link>

                <div className="card bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Create New Note</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Note Title" className="input input-bordered"
                                value={title} onChange={(e)=>{setTitle(e.target.value)}} />

                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Content</span>
                                </label>
                                <textarea placeholder="Note Content" className="textarea textarea-bordered h-32"
                                    value={content} onChange={(e)=>{setContent(e.target.value)}} />
                            </div>

                            <div className="card-actions justify-end"></div>
                             <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? "Creating..." : "Create Note"}
                             </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CreatePage;