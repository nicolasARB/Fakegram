import EditProfileButton from "./EditProfileButton";
import ProfileItems from "./ProfileItems";
import ProfilePic from "./ProfilePic";
import User from "./user.jpg";


export default function Profile(userInfo) {
    return <div className="w-full h-auto relative grid grid-cols-1 grid-rows-2">
    <div className="flex mt-8">
        <div className="w-1/5 h-56 m-2 p-4 mx-auto">
            <ProfilePic profilePic={userInfo.profilePic} userName={userInfo.userName} />
        </div>

        <div className="block w-1/2 mx-auto">
            <div className="flex h-1/6">
                <h1 className="text-xl font-normal w-4/12 text-center self-center block">{userInfo.userName}</h1>
                <div className="w-1/4  ml-4 self-center">
                    <EditProfileButton />
                </div>

            </div>
            <div className="flex text-center my-4">
                <ProfileItems title="Posts"  data={userInfo.PostNumber} />
                <ProfileItems title="Followers" data={userInfo.FollowersNumber} />
                <ProfileItems title={"Following"} data={userInfo.FollowingNumber} />
            </div>
            <div>
                <p className="text-justify p-3">
                   {userInfo.description}
                </p>
            </div>
        </div>

    </div>


</div>
};
  



         
//<h1>{userInfo.userName}</h1>

/*        <ProfileItems title="Posts" data={userInfo.PostNumber} />
            <ProfileItems title="Followers" data={userInfo.FollowersNumber} />
            <ProfileItems title={"Following"} data={userInfo.FollowingNumber} /> 
import EditProfileButton from "./EditProfileButton";
import ProfileItems from "./ProfileItems";
import ProfilePic from "./ProfilePic";



export default function Profile(userInfo) {
 


         
<h1>{userInfo.userName}</h1>*/

/*        <ProfileItems title="Posts" data={userInfo.PostNumber} />
            <ProfileItems title="Followers" data={userInfo.FollowersNumber} />
            <ProfileItems title={"Following"} data={userInfo.FollowingNumber} /> 
*/

  /* 
    const santi = "santii.benegass"
    return <div className="w-full h-1/12 relative grid grid-cols-1">
        <div className="flex mt-8">
            <div className="w-1/5 h-56 m-2 p-4 mx-auto">
                <ProfilePic profilePic={User} userName={santi} />
            </div>

            <div className="block w-1/2 mx-auto">
                <div className="flex h-1/6">
                    <h1 className="text-xl font-normal w-4/12 text-center self-center block">{santi}</h1>
                    <div className="w-1/4  ml-4 self-center">
                        <EditProfileButton />
                    </div>

                </div>
                <div className="flex text-center my-4">
                    <ProfileItems title="Posts"  data={"16k"} />
                    <ProfileItems title="Followers" data={"1M"} />
                    <ProfileItems title={"Following"} data={1} />
                </div>
                <div>
                    <p className="text-justify p-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque in fugiat eum, sint eaque maxime distinctio. Ipsa quo excepturi voluptas optio dolore cum eius odio. Voluptatibus ipsa ratione officia et.
                    </p>
                </div>
            </div>

        </div>


    </div> */ 