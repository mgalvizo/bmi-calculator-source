import {
    StyledResults,
    StyledWelcome,
    StyledWelcomeHeading,
    StyledWelcomeText,
    StyledBMIResults,
    StyledBMIResult,
    StyledBMIHeading,
    StyledBMISummary,
} from './styled/Results.styled';
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

interface ResultsProps {
    data: FormData;
    unit: string;
}

const Results = ({ data, unit }: ResultsProps) => {
    const isEmpty = Object.keys(data).length === 0;

    let bmi: number | undefined;

    let heightIsFilled = false;
    let weightIsFilled = false;

    if (data.height !== undefined && data.weight !== undefined) {
        const { height, weight } = data;

        heightIsFilled = Object.values(height).every(value => value !== '');
        weightIsFilled = Object.values(weight).every(value => value !== '');

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
                isNaN(bmi) ||
                !heightIsFilled ||
                !weightIsFilled) && (
                <StyledWelcome>
                    <StyledWelcomeHeading>Welcome!</StyledWelcomeHeading>
                    <StyledWelcomeText>
                        Enter your height and weight and you'll see your BMI
                        result here.
                    </StyledWelcomeText>
                </StyledWelcome>
            )}
            {!isEmpty &&
                typeof bmi === 'number' &&
                bmi > 0 &&
                bmi !== Infinity &&
                heightIsFilled &&
                weightIsFilled && (
                    <StyledBMIResults>
                        <StyledBMIResult>
                            <p>Your BMI is...</p>
                            <StyledBMIHeading>{bmi}</StyledBMIHeading>
                        </StyledBMIResult>
                        <StyledBMISummary>
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
                                .{' '}
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
                        </StyledBMISummary>
                    </StyledBMIResults>
                )}
        </StyledResults>
    );
};

export default Results;
