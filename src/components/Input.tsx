import React, { ChangeEvent } from "react";

interface InputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ onChange, value, className }) => (
    <input type="text" onChange={onChange} value={value} className={className} />
);

export default Input;