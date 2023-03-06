import Description from "./Description";
import FeedBack from "./FeedBack";
import Post from "./Post";
import TopCard from "./TopCard";

export default function Card(userInfo, postInfo ) {

    return <div className="bg-black w-1/4 h-3/4 relative block mx-auto">
        {/* userInfo is an object that has static information of the user who is posting */}
        <TopCard
            profilePic={userInfo.profilePic}
            profileAlt={userInfo.profileAlt}
            userUrl={userInfo.userUrl} 
            userName={userInfo.userName}
            />
            {/*postInfo is an object that has itself information, must be separated from userInfo cause has different information, its a dynamic info */}
        <Post 
            postUrl={postInfo.postUrl}
            postAlt={postInfo.postAlt}
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
