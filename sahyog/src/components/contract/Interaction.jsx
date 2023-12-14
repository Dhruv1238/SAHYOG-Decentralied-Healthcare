import { ArcanaProvider } from "../../App"
import { ethers } from "ethers";
import { useAuth } from "@arcana/auth-react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../utils/constants";
import { useContext, createContext } from "react";

const Interaction = useContext


const AddUserDetails = () => {
    const [userAddress, setUserAddress] = useState("");
    const { user, isLoggedIn, connect } = useAuth();

    if (!isLoggedIn) {
        connect();
    }

    useEffect(() => {
        if (user) {
            setUserAddress(user.address);
            console.log(user);
        }
    }, [user]);
}