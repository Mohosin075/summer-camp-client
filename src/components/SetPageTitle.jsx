/* eslint-disable react/prop-types */

const SetPageTitle = ({title, desc}) => {
    return (
        <div className="text-center my-8 w-full px-2 md:w-2/3 mx-auto">
            <h2 className="text-xl md:text-5xl font-semibold">{title}</h2>
            <p className="text-sm mt-4">{desc}</p>
        </div>
    );
};

export default SetPageTitle;