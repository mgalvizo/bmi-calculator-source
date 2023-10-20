import { JSX } from 'react';
import {
    StyledFormControl,
    StyledFormControlContainer,
    StyledInputContainer,
    StyledUnit,
    StyledError,
} from './styled/FormControl.styled';

interface FormControlProps {
    children?: JSX.Element;
    labelText?: string;
    errorMessage?: string;
    unitText?: string;
}

const FormControl = ({
    labelText,
    errorMessage,
    children,
    unitText,
}: FormControlProps) => {
    return (
        <StyledFormControl>
            <StyledFormControlContainer>
                {labelText && (
                    <label htmlFor={children?.props?.id}>{labelText}</label>
                )}
                <StyledInputContainer>
                    {children}
                    <StyledUnit>{unitText}</StyledUnit>
                </StyledInputContainer>
                {errorMessage && <StyledError>{errorMessage}</StyledError>}
            </StyledFormControlContainer>
        </StyledFormControl>
    );
};

export default FormControl;
