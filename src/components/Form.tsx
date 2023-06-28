import { useEffect, ReactNode } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import StyledForm from './styled/Form.styled';
import FormControl from './FormControl';

interface FormProps {
    children?: ReactNode;
    unit: string;
    handleData: (data: FormData) => void;
}

export type FormData = {
    height?: {
        cm?: number;
        ft?: number;
        in?: number;
    };
    weight?: {
        kg?: number;
        st?: number;
        lbs?: number;
    };
};

const Form = ({ unit, handleData }: FormProps) => {
    const {
        register,
        unregister,
        handleSubmit,
        reset,
        formState: { errors, isValid },
        watch,
        trigger,
    } = useForm<FormData>({
        defaultValues: {
            height: {},
            weight: {},
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const onError = (errors: FieldErrors) => {
        console.log(errors);
    };

    useEffect(() => {
        // Reset the form so it is NOT dirty
        reset();
        // Unregister the values that are not necessary in each case
        if (unit === 'metric') {
            unregister('height.ft');
            unregister('height.in');
            unregister('weight.st');
            unregister('weight.lbs');
            register('height.cm');
            register('weight.kg');
        } else if (unit === 'imperial') {
            unregister('height.cm');
            register('height.ft');
            register('height.in');
            register('weight.st');
            register('weight.lbs');
        }
    }, [unit, watch, register, unregister, reset]);

    useEffect(() => {
        // Subscribe to all the form data
        const subscription = watch(data => {
            trigger();

            if (isValid) {
                handleData(data);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [watch, trigger, isValid, handleData]);

    // Get access to errors
    console.log('errors', errors);

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
            {unit === 'metric' && (
                <>
                    <FormControl
                        labelText="Height"
                        errorMessage={errors?.height?.cm?.message}
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
                </>
            )}
            {unit === 'imperial' && (
                <>
                    <FormControl
                        labelText="Height"
                        errorMessage={errors?.height?.ft?.message}
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
                        className="visually-hidden"
                        errorMessage={errors?.height?.in?.message}
                    >
                        <input
                            type="number"
                            id="height-in"
                            placeholder="0"
                            min={0}
                            {...register('height.in', {
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
                        labelText="Pounds"
                        className="visually-hidden"
                        errorMessage={errors?.weight?.lbs?.message}
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
                </>
            )}
            <input type="submit" hidden />
        </StyledForm>
    );
};

export default Form;
