import React from 'react';
import styled from 'styled-components';

import { fontStyle, setCursor } from '../../GlobalStyles';
import { Button } from '../Button';
import { Input } from '../Input';

interface LoginProps {
    nicknamePlaceholder?: string;
    passwordPlaceholder?: string;
    disabled?: boolean;
    nameLabel?: string;
    passwordLabel?: string;
    className?: string;
    onClick?: () => void;
}

interface StyledContainerProps {
    disabled?: boolean;
}

interface StyledWrapperProps {
    className?: string;
}

const StyledWrapper = styled.div<StyledWrapperProps>``;

const StyledLabel = styled.span``;

const StyledButton = styled(Button)``;

const StyledContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    :not(:last-child) {
        margin-bottom: 20px;
    }

    ${StyledLabel} {
        height: 22px;
    }

    ${StyledLabel} {
        cursor: ${setCursor};
        user-select: none;
        ${fontStyle};
    }
`;

export const Login: React.FC<LoginProps> = ({
    nameLabel,
    nicknamePlaceholder,
    disabled,
    passwordLabel,
    passwordPlaceholder,
    className,
    onClick
}: LoginProps) => {
    return (
        <StyledWrapper className={className}>
            <StyledContainer>
                <Input label={nameLabel} placeholder={nicknamePlaceholder} disabled={disabled} />
            </StyledContainer>
            <Input
                label={passwordLabel}
                placeholder={passwordPlaceholder}
                disabled={disabled}
                type="password"
            />
            <StyledButton
                label="Submit"
                onClick={() => !disabled && onClick && onClick()}
                disabled={disabled}
            />
        </StyledWrapper>
    );
};
