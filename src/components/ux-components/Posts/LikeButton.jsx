import {useState} from 'react'
export default function LikeButton(bool) {

    const [Liked,SetLiked] = useState(bool)
    return<button onClick={()=>SetLiked(!Liked)} id="like" className="w-1/8 text-white m-1 text-lg bg-slate-800 py-1 px-2 ml-4 ">
        {Liked ? "Dislike" : "Like" }
    </button>
    
};
