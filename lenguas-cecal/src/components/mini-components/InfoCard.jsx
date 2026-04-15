import React from "react";

export const InfoCard = ({ icon, number, text }) => {
    const renderIcon = () => {
        if (React.isValidElement(icon)) return icon;
        if (typeof icon === 'function') return React.createElement(icon);
        return icon;
    };
    return (
        <div className="flex flex-col items-center justify-center gap-3 h-40 w-60 rounded-2xl bg-[#F4F7FA]">
            <span className="rounded-full h-10 bg-hover w-10 flex items-center justify-center">{renderIcon()}</span>
            <h3 className="text-2xl font-bold">{number}</h3>
            <p className="text-base text-tertiary">{text}</p>
        </div>
    )
}
