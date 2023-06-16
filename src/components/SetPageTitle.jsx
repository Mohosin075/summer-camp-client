/* eslint-disable react/prop-types */

import { Fade } from "react-awesome-reveal";

const SetPageTitle = ({title, desc}) => {
    return (
        <div className="text-center my-8 w-full px-2 md:w-2/3 mx-auto">
            <h2 className="text-xl md:text-5xl font-semibold"><Fade cascade duration={50}>{title}</Fade></h2>
            <Fade delay={1e2} cascade damping={1e-1}><p className="text-sm mt-4">{desc}</p></Fade>
        </div>
    );
};

export default SetPageTitle;