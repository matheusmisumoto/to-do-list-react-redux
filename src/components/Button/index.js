import React from "react";

export default function Button({children, onClick, className, disabled}) {
    return <button className={className} onClick={onClick} disabled={disabled}>{children}</button>
}