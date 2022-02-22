import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

export function User() {
    const {name} = useSelector(selectUser);

    return (
        <h1>User: {name}</h1>
    )
}