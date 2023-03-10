export default function ProfileItems({title,data}) {

    return<div className="w-full h-auto block">
        <h2 className="text-lg font-medium block">{title}</h2>
        <p className="text-base font-bold block">{data}</p>
    </div>
    
};
