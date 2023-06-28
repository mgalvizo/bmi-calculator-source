import { JSX } from 'react';
import StyledFormControl from './styled/FormControl.styled';

interface FormControlProps {
    children?: JSX.Element;
    labelText: string;
    errorMessage?: string;
    className?: string;
}

const FormControl = ({
    labelText,
    errorMessage,
    className,
    children,
}: FormControlProps) => {
    return (
        <StyledFormControl>
            {labelText && (
                <label className={className} htmlFor={children?.props?.id}>
                    {labelText}
                </label>
            )}
            {children}
            {errorMessage && <span className="error">{errorMessage}</span>}
        </StyledFormControl>
    );
};

export default FormControl;
