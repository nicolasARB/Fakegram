import {useState} from 'react'
export default function LikeButton() {

    const [Liked,SetLiked] = useState(false)
    return<button onClick={()=>SetLiked(!Liked)} className="w-1/8">
        {Liked ? "Dislike" : "Like" }
    </button>
    
};
