export default function Description(props) {

    return <div className="min-w-full h-1/5 flex bg-slate-700 text-white px-2"><h1 className="w-full">
        <a href={props.userUrl} className="text-white font-bold mr-1">{props.userName}</a>
        {props.userDescription}</h1>

    </div>

};
