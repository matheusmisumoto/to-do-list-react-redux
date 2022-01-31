import React from "react";

const Input = ({onChange, value, className}) => (
    <input type="text" onChange={onChange} value={value} className={className} />
);

export default Input