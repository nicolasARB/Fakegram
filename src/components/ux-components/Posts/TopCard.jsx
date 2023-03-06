export default function TopCard(props) {
    
    return <div className="min-w-full bg-slate-700 h-1/6">
        <img src={props.profilePic} alt={props.profileAlt} />
        <a href={props.userUrl}>{props.userName}</a>
    
    </div>
};
