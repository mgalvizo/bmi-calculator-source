import { JSX } from 'react';
import StyledFormControl from './styled/FormControl.styled';

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
            <div className="form-control__container">
                {labelText && (
                    <label htmlFor={children?.props?.id}>{labelText}</label>
                )}
                <div className="input__container">
                    {children}
                    <span className="unit">{unitText}</span>
                </div>
                {errorMessage && <span className="error">{errorMessage}</span>}
            </div>
        </StyledFormControl>
    );
};

export default FormControl;
