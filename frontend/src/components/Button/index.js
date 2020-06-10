import React from "react";

import { FiLogIn } from "react-icons/fi";

import "./styles.css";

export default function Button(funbtn) {
    return (
        <>
            <a onClick={funbtn} className="btn">
                <div className="icon">
                    <FiLogIn className="material-icons left" />
                </div>
                <div className="ent">
                    ENTRAR
                </div>
            </a>
        </>
    );
}