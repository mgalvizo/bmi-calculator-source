import styled from 'styled-components';

const StyledFormControl = styled.div`
    label {
        display: block;
        font-size: var(--body-fsz-s);
        margin-bottom: var(--web-margin-s);
    }

    input[type='number'] {
        appearance: none;
        -moz-appearance: textfield;
        -webkit-appearance: textfield;
        width: 100%;
        height: var(--input-ht);
        padding-left: var(--web-padding-l);
        padding-right: calc(var(--web-padding-m) + var(--web-padding-xl2));
        background-color: transparent;
        border: 1px solid var(--borders);
        border-radius: var(--input-border-rad);
        color: var(--gunmetal);
        font-size: var(--heading-m-fsz);
        font-weight: var(--semibold);
        line-height: var(--input-lht);
        letter-spacing: -1px;
        cursor: pointer;
        transition-property: border-color;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;

        ::placeholder {
            opacity: 0.25;
        }

        &:hover {
            border-color: var(--blue);
        }

        &:focus {
            border-color: var(--blue);
            outline: none;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            appearance: none;
            margin: 0;
        }
    }
`;

const StyledFormControlContainer = styled.div``;

const StyledInputContainer = styled.div`
    position: relative;
    z-index: 0;
`;

const StyledUnit = styled.span`
    position: absolute;
    top: 50%;
    right: var(--web-margin-l);
    transform: translateY(-50%);
    color: var(--blue);
    font-size: var(--heading-m-fsz);
    font-weight: var(--semibold);
    z-index: -1;
`;

const StyledError = styled.span`
    display: block;
    color: var(--error);
    font-size: var(--body-fsz-s);
    margin-top: var(--web-margin-s);
`;

export {
    StyledFormControl,
    StyledFormControlContainer,
    StyledInputContainer,
    StyledUnit,
    StyledError,
};
