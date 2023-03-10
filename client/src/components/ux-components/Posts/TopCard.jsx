export default function TopCard(props) {
    
    return <div className="min-w-full bg-slate-700 h-1/6 flex text-white py-1 rounded-t-xl">
        <img src={props.profilePic} alt={props.profileAlt} className="w-1/12 rounded-full m-1 mx-6  " />
        <a href={props.userUrl} className="self-center text-lg cursor-pointer">{props.userName}</a>
    
    </div>
};
// export default function TopCard(props) {
    
//     return <div className="min-w-full bg-slate-700 h-1/6 flex text-white">
//         <img src={props.profilePic} alt={props.profileAlt} className="w-1/12 rounded-full m-1 mx-6  " />
//         <a href={props.userUrl} className="self-center text-lg cursor-pointer">santii.benegass</a>
    
//     </div>
// };
