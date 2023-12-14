import { ArcanaProvider } from "../../App"
import { ethers } from "ethers";
import { useAuth } from "@arcana/auth-react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../utils/constants";
import { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Interaction = createContext();


export const InteractionProvider = ({ children }) => {
    const [userAddress, setUserAddress] = useState("");
    const { user, isLoggedIn, connect } = useAuth();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // if (!isLoggedIn) {
    //     connect();
    // }

    useEffect(() => {
        if (user) {
            setUserAddress(user.address);
            console.log(user);
        }
    }, [user]);

    const provider = new ethers.providers.Web3Provider(ArcanaProvider.provider);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    const storeUserDetails = async (age, gender, name, phoneNumber) => {
        setLoading(true);
        const tx = await contract.storeUserDetails(age, gender, name, phoneNumber);
        try {
            const transaction = await tx.wait();
            transaction.transactionHash ?
                setLoading(false) :
                alert("Transaction failed please submit the form again");
            setLoading(false);
            navigate('/medicaldetails')
                ;
        }
        catch (err) {
            console.log(err);
        }
    };

    const storeMedicalDetails = async (medicalDetails) => {
        setLoading(true);
        const transactionHash = await contract.storeUserData(medicalDetails);
        try {
            const transaction = await transactionHash.wait();
            transaction.transactionHash ?
                setLoading(false) :
                alert("Transaction failed please submit the form again");
            setLoading(false);
            navigate('/healthinsurance');
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Interaction.Provider value={{ storeUserDetails, loading, storeMedicalDetails }}>
            {children}
        </Interaction.Provider>
    );
}