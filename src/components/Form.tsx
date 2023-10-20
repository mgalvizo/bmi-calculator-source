import { useEffect, ReactNode } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import {
    StyledForm,
    StyledMetricInputs,
    StyledImperialInputs,
} from './styled/Form.styled';
import FormControl from './FormControl';

interface FormProps {
    children?: ReactNode;
    unit: string;
    handleData: (data: FormData) => void;
}

export type FormData = {
    height?: {
        cm?: string;
        ft?: string;
        inches?: string;
    };
    weight?: {
        kg?: string;
        st?: string;
        lbs?: string;
    };
};

const defaultValues = {
    height: {},
    weight: {},
};

const Form = ({ unit, handleData }: FormProps) => {
    const {
        register,
        unregister,
        handleSubmit,
        formState: { errors, isDirty },
        watch,
        trigger,
        reset,
    } = useForm<FormData>({
        defaultValues,
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const onError = (errors: FieldErrors) => {
        console.log(errors);
    };

    useEffect(() => {
        if (unit === 'metric') {
            unregister('height.ft');
            unregister('height.inches');
            unregister('weight.st');
            unregister('weight.lbs');
        }

        if (unit === 'imperial') {
            unregister('height.cm');
            unregister('weight.kg');
        }

        return () => {
            reset();
        };
    }, [unit, unregister, reset]);

    useEffect(() => {
        const subscription = watch(data => {
            trigger();
            handleData(data);
        });

        if (isDirty) {
            trigger();
        }

        return () => {
            subscription.unsubscribe();
        };
    }, [watch, trigger, isDirty, handleData]);

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
                {unit === 'metric' && (
                    <StyledMetricInputs>
                        <FormControl
                            labelText="Height"
                            errorMessage={errors?.height?.cm?.message}
                            unitText="cm"
                        >
                            <input
                                type="number"
                                id="height-cm"
                                placeholder="0"
                                min={0}
                                {...register('height.cm', {
                                    required: 'This field is required.',
                                    min: {
                                        value: 0,
                                        message:
                                            'Please input only positive numbers',
                                    },
                                })}
                            />
                        </FormControl>
                        <FormControl
                            labelText="Weight"
                            errorMessage={errors?.weight?.kg?.message}
                            unitText="kg"
                        >
                            <input
                                type="number"
                                id="weight-kg"
                                placeholder="0"
                                min={0}
                                {...register('weight.kg', {
                                    required: 'This field is required.',
                                    min: {
                                        value: 0,
                                        message:
                                            'Please input only positive numbers',
                                    },
                                })}
                            />
                        </FormControl>
                    </StyledMetricInputs>
                )}
                {unit === 'imperial' && (
                    <StyledImperialInputs>
                        <FormControl
                            labelText="Height"
                            errorMessage={errors?.height?.ft?.message}
                            unitText="ft"
                        >
                            <input
                                type="number"
                                id="height-ft"
                                placeholder="0"
                                min={0}
                                {...register('height.ft', {
                                    required: 'This field is required.',
                                    min: {
                                        value: 0,
                                        message:
                                            'Please input only positive numbers',
                                    },
                                })}
                            />
                        </FormControl>
                        <FormControl
                            labelText="Inches"
                            errorMessage={errors?.height?.inches?.message}
                            unitText="in"
                        >
                            <input
                                type="number"
                                id="height-inches"
                                placeholder="0"
                                min={0}
                                {...register('height.inches', {
                                    required: 'This field is required.',
                                    min: {
                                        value: 0,
                                        message:
                                            'Please input only positive numbers',
                                    },
                                })}
                            />
                        </FormControl>
                        <FormControl
                            labelText="Weight"
                            errorMessage={errors?.weight?.st?.message}
                            unitText="st"
                        >
                            <input
                                type="number"
                                id="weight-st"
                                placeholder="0"
                                min={0}
                                {...register('weight.st', {
                                    required: 'This field is required.',
                                    min: {
                                        value: 0,
                                        message:
                                            'Please input only positive numbers',
                                    },
                                })}
                            />
                        </FormControl>
                        <FormControl
                            labelText="Weight"
                            errorMessage={errors?.weight?.lbs?.message}
                            unitText="lbs"
                        >
                            <input
                                type="number"
                                id="weight-lbs"
                                placeholder="0"
                                min={0}
                                {...register('weight.lbs', {
                                    required: 'This field is required.',
                                    min: {
                                        value: 0,
                                        message:
                                            'Please input only positive numbers',
                                    },
                                })}
                            />
                        </FormControl>
                    </StyledImperialInputs>
                )}
            </StyledForm>
        </>
    );
};

export default Form;
