import styled from 'styled-components';

const StyledUnit = styled.div`
    .radio-control {
        display: flex;
        flex-flow: row wrap;
        justify-content: start;
        align-items: center;
        gap: var(--web-margin-m);
    }

    label {
        font-weight: var(--semibold);
        cursor: pointer;
    }

    input[type='radio'] {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: var(--radio-sz);
        height: var(--radio-sz);
        border: 1px solid var(--borders);
        border-radius: 50%;
        outline-offset: 0;
        cursor: pointer;
        transition-property: background, border-color;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;

        &:hover {
            border-color: var(--blue);
        }

        &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: var(--inner-radio-sz);
            height: var(--inner-radio-sz);
            background-color: var(--blue);
            border-radius: 50%;
            transition-property: opacity, transform;
            transition-duration: 0.25s;
            transition-timing-function: ease-in-out;
            content: '';
        }

        &:checked {
            border-color: transparent;
            background-color: rgba(52, 95, 246, 0.15);

            &::after {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .radio__container {
        display: flex;
        flex-flow: row wrap;
        justify-content: start;
        gap: var(--web-margin-l);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        .radio__container {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--web-margin-xl);
        }
    }
`;

export default StyledUnit;
