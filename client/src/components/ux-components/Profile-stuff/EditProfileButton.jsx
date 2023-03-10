export default function EditProfileButton() {
    
    function editProfile() {
        return alert("Error al intentar editar el perfil. Vuelve a intentarlo más tarde")
        
    }


    return <button className="w-full h-auto font-medium bg-gray-100" onClick={editProfile} >Edit Profile</button>
    
};
