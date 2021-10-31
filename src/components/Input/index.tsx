import React from 'react';
import styled from 'styled-components';
import { fontStyle, lightgrey1, setCursor } from '../../GlobalStyles';

interface InputProps {
    type?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface StyledContainerProps {
    disabled?: boolean;
}

interface StyledInputProps {
    disabled?: boolean;
}

interface StyledLabelProps {
    disabled?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
    border-radius: 5px;
    border: 1px solid ${lightgrey1};
`;

const StyledLabel = styled.span<StyledLabelProps>``;

const StyledContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;

    ${StyledInput},
    ${StyledLabel} {
        height: 22px;
    }

    ${StyledInput},
    ${StyledLabel} {
        cursor: ${setCursor};
        user-select: none;
        ${fontStyle};
    }
`;

export const Input: React.FC<InputProps> = ({
    type,
    label,
    disabled,
    className,
    placeholder,
    onBlur,
    onChange
}) => {
    return (
        <StyledContainer className={className}>
            {label && <StyledLabel>{label}</StyledLabel>}
            <StyledInput
                placeholder={placeholder}
                disabled={disabled}
                onBlur={(event: React.FocusEvent<HTMLInputElement>) => onBlur && onBlur(event)}
                onChange={(event: React.FocusEvent<HTMLInputElement>) => onChange && onChange(event)}
                type={type}
            ></StyledInput>
        </StyledContainer>
    );
};
