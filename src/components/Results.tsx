import StyledResults from './styled/Results.styled';
import { FormData } from './Form';

// TODO
// Convert all strings to numbers for calculations
// Remove leading zeroes

interface ResultsProps {
    data: FormData | object;
}

const Results = ({ data }: ResultsProps) => {
    console.log('data', data);

    return <StyledResults>Results</StyledResults>;
};

export default Results;
