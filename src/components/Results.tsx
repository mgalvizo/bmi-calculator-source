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
            {(isEmpty ||
                bmi === undefined ||
                bmi === 0 ||
                bmi === Infinity ||
                isNaN(bmi)) && (
                <div className="welcome">
                    <h2 className="welcome-heading">Welcome!</h2>
                    <p className="welcome__text">
                        Enter your height and weight and you'll see your BMI
                        result here.
                    </p>
                </div>
            )}
            {!isEmpty &&
                typeof bmi === 'number' &&
                bmi > 0 &&
                bmi !== Infinity && (
                    <div className="results">
                        <div className="bmi__result">
                            <p>Your BMI is...</p>
                            <h2 className="bmi-heading">{bmi}</h2>
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
                                        {healthyWeight?.minHealthyWeight.kg}kgs
                                        - {healthyWeight?.maxHealthyWeight.kg}
                                        kgs.
                                    </strong>
                                </span>
                            )}
                            {unit === 'imperial' && (
                                <span>
                                    Your ideal weight is between{' '}
                                    <strong>
                                        {healthyWeight?.minHealthyWeight.st}st{' '}
                                        {healthyWeight?.minHealthyWeight.lbs}lbs
                                        - {healthyWeight?.maxHealthyWeight.st}st{' '}
                                        {healthyWeight?.maxHealthyWeight.lbs}
                                        lbs.
                                    </strong>
                                </span>
                            )}
                        </div>
                    </div>
                )}
        </StyledResults>
    );
};

export default Results;
