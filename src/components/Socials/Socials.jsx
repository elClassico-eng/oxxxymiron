import React from "react";
import { SOCIALS } from "../../utils/constants";
import { Icon } from "../Icon/Icon";

export const Socials = () => (
    <ul className="socials">
        {SOCIALS.map(({ icon, link }) => (
            <li title="icon" className="social-items" key={icon}>
                <a href={link}>
                    <Icon name={icon} />
                </a>
            </li>
        ))}
    </ul>
);
