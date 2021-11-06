import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import validateColor from 'validate-color';
import { STYLE_DEFAULT_COLOR } from '../../GlobalStyles';

interface HeaderProps {
    backgroundColor?: string;
    className?: string;
}

interface StyledHeaderProps {
    backgroundColor?: string;
}

const setColor = ({ backgroundColor }: { backgroundColor?: string }) => {
    return backgroundColor ? backgroundColor : STYLE_DEFAULT_COLOR;
};

const StyledHeader = styled.div<StyledHeaderProps>`
    display: flex;
    height: 50px;
    background: ${setColor};
`;

export const Header: React.FC<HeaderProps> = ({ backgroundColor, className, children }) => {
    const parsedColor = validateColor(backgroundColor as string);
    const bgHex = (parsedColor && Color(backgroundColor).hex()) || '';

    return (
        <StyledHeader backgroundColor={bgHex} className={className}>
            {children}
        </StyledHeader>
    );
};
