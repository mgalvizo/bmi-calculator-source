import styled from 'styled-components';

const StyledForm = styled.form``;

const StyledMetricInputs = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
    gap: var(--web-margin-m);

    // 768px
    @media only screen and (min-width: 48em) {
        grid-template-rows: 1fr;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--web-margin-l);
    }
`;

const StyledImperialInputs = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: var(--web-margin-m);

    label[for='height-inches'],
    label[for='weight-lbs'] {
        visibility: hidden;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        gap: var(--web-margin-l);
    }
`;

export { StyledForm, StyledMetricInputs, StyledImperialInputs };
