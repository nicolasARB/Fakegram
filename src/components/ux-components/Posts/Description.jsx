export default function Description(props) {

    return <div className="min-w-full h-1/5 flex">
        <a href={props.userUrl} className="text-black font-bold">{props.userName}</a>
        <h1 className="w-3/4">{props.userDescription}</h1>
 
    </div>
    
};
