import Profile from "../../components/ux-components/Profile-stuff/Index";
import Feed from "../../components/ux-components/Feed/Feed";

export default function MyProfile(userInfo, postInfo) {
    
    return<div className="w-2/3 mx-auto">
    <Profile userInfo={userInfo} /> 
    <Feed postInfo={postInfo} userInfo={userInfo} />
    
    
    </div>
};
