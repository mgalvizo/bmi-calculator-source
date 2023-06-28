import { ReactNode } from 'react';
import StyledCalculator from './styled/Calculator.styled';

interface CalculatorProps {
    children?: ReactNode;
}

const Calculator = ({ children }: CalculatorProps) => {
    return <StyledCalculator>{children}</StyledCalculator>;
};

export default Calculator;
