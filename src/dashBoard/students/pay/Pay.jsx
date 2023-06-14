import { useParams } from "react-router-dom";

const Pay = () => {
    const {id} = useParams()
    return (
        <div>
            pay : {id}
        </div>
    );
};

export default Pay;