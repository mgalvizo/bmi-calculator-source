import StyledResults from './styled/Results.styled';
import { FormData } from './Form';
import {
    computeBmi,
    formatBmi,
    computeHealthyWeightRange,
} from './utils/helpers';
import {
    BMI_UNDERWEIGHT,
    BMI_HEALTHY_MIN,
    BMI_HEALTHY_MAX,
    BMI_OVERWEIGHT_MIN,
    BMI_OVERWEIGHT_MAX,
    BMI_OBESE,
} from './utils/constants';

// TODO
// Convert all strings to numbers for calculations
// Remove leading zeroes

interface ResultsProps {
    data: FormData;
    unit: string;
}

const Results = ({ data, unit }: ResultsProps) => {
    const isEmpty = Object.keys(data).length === 0;

    let bmi: number | undefined;

    if (data.height !== undefined && data.weight !== undefined) {
        const { height, weight } = data;

        bmi = formatBmi(computeBmi(unit, height, weight));
    }

    let isUnderweight;
    let isHealthy;
    let isOverweight;
    let isObese;

    if (bmi !== undefined) {
        isUnderweight = bmi < BMI_UNDERWEIGHT;
        isHealthy = bmi >= BMI_HEALTHY_MIN && bmi <= BMI_HEALTHY_MAX;
        isOverweight = bmi >= BMI_OVERWEIGHT_MIN && bmi <= BMI_OVERWEIGHT_MAX;
        isObese = bmi >= BMI_OBESE;
    }

    let healthyWeight;

    if (data.height !== undefined) {
        const { height } = data;
        healthyWeight = computeHealthyWeightRange(unit, height);
    }

    return (
        <StyledResults>
            {(isEmpty || typeof bmi === undefined || bmi === 0) && (
                <>
                    <h2>Welcome!</h2>
                    <p>
                        Enter your height and weight and you'll see your BMI
                        result here.
                    </p>
                </>
            )}
            {!isEmpty && typeof bmi === 'number' && bmi > 0 && (
                <>
                    <div className="bmi__result">
                        <p>Your BMI is...</p>
                        <h2>{bmi}</h2>
                    </div>
                    <div className="bmi__summary">
                        <span>
                            Your BMI suggests you're{' '}
                            {isUnderweight
                                ? 'underweight'
                                : isHealthy
                                ? 'a healthy weight'
                                : isOverweight
                                ? 'overweight'
                                : isObese
                                ? 'obese'
                                : '...'}
                            .
                        </span>
                        {unit === 'metric' && (
                            <span>
                                Your ideal weight is between{' '}
                                <strong>
                                    {healthyWeight?.minHealthyWeight.kg}kgs -{' '}
                                    {healthyWeight?.maxHealthyWeight.kg}kgs.
                                </strong>
                            </span>
                        )}
                        {unit === 'imperial' && (
                            <span>
                                Your ideal weight is between{' '}
                                <strong>
                                    {healthyWeight?.minHealthyWeight.st}st{' '}
                                    {healthyWeight?.minHealthyWeight.lbs}lbs -{' '}
                                    {healthyWeight?.maxHealthyWeight.st}st{' '}
                                    {healthyWeight?.maxHealthyWeight.lbs}lbs.
                                </strong>
                            </span>
                        )}
                    </div>
                </>
            )}
        </StyledResults>
    );
};

export default Results;
