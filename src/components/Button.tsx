import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
}

export default function Button({ children, onClick, className, disabled }: ButtonProps) {
    return <button className={className} onClick={onClick} disabled={disabled}>{children}</button>;
}