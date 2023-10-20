import { useState, useCallback } from 'react';
import {
    StyledCalculator,
    StyledCalculatorContent,
    StyledFormInstruction,
} from './styled/Calculator.styled';
import Unit from './Unit';
import Form from './Form';
import { FormData } from './Form';
import Results from './Results';

const Calculator = () => {
    const [unit, setUnit] = useState<string>('metric');
    const [data, setData] = useState({});

    const handleUnit = (unit: string) => {
        setUnit(unit);
        setData({});
    };

    const handleData = useCallback((data: FormData) => {
        setData(data);
    }, []);

    return (
        <StyledCalculator>
            <StyledCalculatorContent>
                <StyledFormInstruction>
                    Enter your details below
                </StyledFormInstruction>
                <Unit handleUnit={handleUnit} />
                <Form unit={unit} handleData={handleData} />
                <Results data={data} unit={unit} />
            </StyledCalculatorContent>
        </StyledCalculator>
    );
};

export default Calculator;
