export default function ProfilePic(userInfo) {

    return<img src={userInfo.profilePic} alt={userInfo.userName} className="w-full h-auto rounded-full" />
    
    
};
