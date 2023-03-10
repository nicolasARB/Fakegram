import Description from "./Description";
import FeedBack from "./FeedBack";
import Post from "./Post";
import TopCard from "./TopCard";

export default function Card(userInfo, postInfo) {

    return <div className="bg-slate-700 w-1/4 h-3/4 relative block mx-auto my-16 rounded-xl border-b-4 border-gray-400 p-1">
        {/* userInfo is an object that has static information of the user who is posting */}
        <TopCard
            profilePic={userInfo.profilePic}
            profileAlt={userInfo.userName}
            userUrl={userInfo.userUrl}
            userName={userInfo.userName}
        />
        {/*postInfo is an object that has itself information, must be separated from userInfo cause has different information, its a dynamic info */}
        <Post
            postUrl={postInfo.postUrl}
            postAlt={postInfo.postAlt}
            postKey={postInfo.postKey}
        />
        {/* Feedback must be an object included into postInfo object */}
        <FeedBack
            likes={postInfo.likes}
        />
        {/* Description Components use both objects */}
        <Description
            userUrl={userInfo.userUrl}
            userName={userInfo.userName}
            userDescription={postInfo.description}
        />

    </div>
};

/*

import Description from "./Description";
import FeedBack from "./FeedBack";
import Post from "./Post";
import TopCard from "./TopCard";
import User from "../Profile-stuff/user.jpg"

export default function Card(userInfo, postInfo ) {

    const userName = "santii.benegass";
    return <div className="bg-slate-700 w-1/4 h-3/4 relative block mx-auto my-16 rounded-xl border-b-4 border-gray-400 p-1">
    
        <TopCard
            profilePic={User}
            profileAlt={userName}
            userUrl={userInfo.userUrl} 
            userName={userName}
            />
          
        <Post 
            postUrl={User}
            postAlt={postInfo.postAlt}
        />
     
        <FeedBack
        likes={postInfo.likes}
        />
       
        <Description
            userUrl="#"
            userName={userName}
            userDescription=" Viajando a la antártida porque me re cago de calor! ✈️ "
        />

    </div>
};


*/