export default function CreatePost(props) {

    return <div>
        <div>
            <button>Upload Post</button>
        </div>
        <div>
            <label htmlFor="docpicker">Choose file to Post</label>
            <input
                type="file"
                id="docpicker"
                accept="image/*,video/*" />
        </div>

    </div>

};
