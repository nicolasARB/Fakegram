export default function Post(props) {
    {/*just waits for the post info */}
    return<div id="post" className="min-w-full h-3/5">
        <img src={props.postUrl} alt={props.postAlt} key={props.postKey} className="w-full h-auto object-fill py-1" />
    </div>
};
