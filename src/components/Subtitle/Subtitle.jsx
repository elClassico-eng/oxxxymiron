import React from "react";

import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`
    animation: 2s ${keyframes`${fadeIn}`};
`;

export const Subtitle = ({ text }) => {
    <FadeIn>
        <h2>{text}</h2>
    </FadeIn>;
};
