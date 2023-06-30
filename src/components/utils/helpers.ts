import { BMI_HEALTHY_MIN, BMI_HEALTHY_MAX } from './constants';

type Height = {
    cm?: string;
    ft?: string;
    inches?: string;
};

type Weight = {
    kg?: string;
    st?: string;
    lbs?: string;
};

type HealthyWeight = {
    kg?: number;
    st?: number;
    lbs?: number;
};

type HealthyRange = {
    minHealthyWeight: HealthyWeight;
    maxHealthyWeight: HealthyWeight;
};

export const computeStoneToLbs = (st: string | undefined): number => {
    return Number(st) * 14;
};

export const computeLbsToStone = (st: string | undefined): number => {
    return Number(st) / 14;
};

export const computeFeetToIn = (ft: string | undefined): number => {
    return Number(ft) * 12;
};

export const computeBmi = (
    unit: string,
    height: Height,
    weight: Weight
): number | undefined => {
    if (height !== undefined && weight !== undefined) {
        if (unit === 'metric') {
            const { cm } = height;
            const { kg } = weight;

            const bmi = Number(kg) / (Number(cm) / 100) ** 2;

            return bmi;
        } else if (unit === 'imperial') {
            const { ft, inches } = height;
            const { st, lbs } = weight;

            const stoneToLbs = computeStoneToLbs(st);
            const feetToIn = computeFeetToIn(ft);

            const totalLbs = stoneToLbs + Number(lbs);
            const totalIn = feetToIn + Number(inches);

            const bmi = (totalLbs / totalIn ** 2) * 703;

            return bmi;
        }
    } else {
        return undefined;
    }
};

export const formatBmi = (bmi: number | undefined): number | undefined => {
    if (bmi === undefined) {
        return undefined;
    }

    return Math.round((bmi + Number.EPSILON) * 10) / 10;
};

export const computeMetricHealthyWeight = (
    bmiRange: number,
    cm: string | undefined
): number | undefined => {
    const healthyWeight = bmiRange * (Number(cm) / 100) ** 2;

    // Recast to Number
    if (typeof healthyWeight === 'number') {
        return Number(healthyWeight.toFixed(1));
    }

    return undefined;
};

export const computeImperialHealthyWeight = (
    bmiRange: number,
    inches: number
): number[] => {
    const healthyWeightResult = (bmiRange / 703) * inches ** 2;
    const healthyWeightStones = computeLbsToStone(String(healthyWeightResult));
    const healthyWeightLbs =
        healthyWeightResult -
        computeStoneToLbs(String(Math.trunc(healthyWeightStones)));

    return [Math.floor(healthyWeightStones), Math.floor(healthyWeightLbs)];
};

export const computeHealthyWeightRange = (
    unit: string,
    height: Height
): HealthyRange | undefined => {
    if (height !== undefined) {
        if (unit === 'metric') {
            const { cm } = height;

            const minHealthyWeight = computeMetricHealthyWeight(
                BMI_HEALTHY_MIN,
                cm
            );
            const maxHealthyWeight = computeMetricHealthyWeight(
                BMI_HEALTHY_MAX,
                cm
            );

            return {
                minHealthyWeight: { kg: minHealthyWeight },
                maxHealthyWeight: { kg: maxHealthyWeight },
            };
        } else if (unit === 'imperial') {
            const { ft, inches } = height;

            const feetToIn = computeFeetToIn(ft);
            const totalIn = feetToIn + Number(inches);

            const [minHealthyWeightStones, minHealthyWeightLbs] =
                computeImperialHealthyWeight(BMI_HEALTHY_MIN, totalIn);

            const [maxHealthyWeightStones, maxHealthyWeightLbs] =
                computeImperialHealthyWeight(BMI_HEALTHY_MAX, totalIn);

            return {
                minHealthyWeight: {
                    st: minHealthyWeightStones,
                    lbs: minHealthyWeightLbs,
                },
                maxHealthyWeight: {
                    st: maxHealthyWeightStones,
                    lbs: maxHealthyWeightLbs,
                },
            };
        }
    } else {
        return undefined;
    }
};
