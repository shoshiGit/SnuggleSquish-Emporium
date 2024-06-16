import { useSelector } from "react-redux";

const Profile = () => {
    let user = useSelector((state) => state.user.currentUser);

    return ( <>
    </> );
}
 
export default Profile;