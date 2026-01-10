import React from "react";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="button">{children}</button>
    );
};

export default PrimaryButton;
