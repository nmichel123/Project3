import React, { useReducer, useRef, useState, useEffect } from "react";
import "./style.css"

function ProfileForm(props) {
    const inputRef = useRef()
    const [fighters, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                  return [
                      ...state,
                {
                    fId: Math.floor((2 ** 32) * Math.random()),
                    firstName: "",
                    lastName: "",

                }
                  ]
                default:
                    return state;
                }
    }, [])
    
    return(
        <div></div>
    )
}