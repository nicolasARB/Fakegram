import Card from "../Posts/Card";
import Logo1 from "../../../media/FG-icon.png"
import Logo2 from "../../../media/FG-logo.jpg"
import Logo3 from "../../../media/FG-logo.png"

export default function Feed(postInfo, userInfo) {





//postInfo.postUrl

const postObject = [

{
url:Logo1,
alt:"asd"

},{
    url:Logo2,
    alt:"ss"
},{
    url:Logo3,
    alt:"dd"
},
{
    url:Logo1,
    alt:"asd"
    
    },{
        url:Logo2,
        alt:"ss"
    },{
        url:Logo3,
        alt:"dd"
    }

]






    const PostsMap = postObject.map((post,i)=> {
        function showPost(i){

            return<Card postKey={i} postUrl={post.url} userInfo={"Santi"}  />
            
            }
        i+=1
            return <div  key={i} className="w-full h-full p-2">
                    <img onClick={()=>showPost(i)} src={post.url} alt={postInfo.postAlt}  id="postHandler" className="w-full h-full object-contain cursor-pointer" />
                </div>
            
        })

    

    return <div className="w-full mt-32 grid grid-cols-4">
        {PostsMap}
    </div>



};

/*
import Card from "../Posts/Card";

export default function Feed(postInfo, userInfo) {





//postInfo.postUrl

const postObject = [

{
name:"asdasdasd",
alt:"asdasdsadasdasd"

},{
    name:"asdasdasd",
    alt:"asdasdsadasdasd"
},{
    name:"asdasdasd",
    alt:"asdasdsadasdasd"
}

]

function showPost(i){

return<Card key={i} postInfo={postInfo} userInfo={userInfo} />

}




    const PostsMap = postInfo.postUrl.map((post,i)=> {
        i+=1
            return <div onClick={()=>showPost(i)} key={i} className="w-full h-auto">
                    <img src={post} alt={postInfo.postAlt}  id="postHandler" className="w-full h-auto" />
                </div>
            
        })

    

    return <div className="w-full grid grid-cols-4">
        {PostsMap}
    </div>



};


*/