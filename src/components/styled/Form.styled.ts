import styled from 'styled-components';

const StyledForm = styled.form`
    .metric-inputs {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: 1fr;
        gap: var(--web-margin-m);
    }

    .imperial-inputs {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        gap: var(--web-margin-m);

        label[for='height-inches'],
        label[for='weight-lbs'] {
            visibility: hidden;
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        .metric-inputs {
            grid-template-rows: 1fr;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--web-margin-l);
        }

        .imperial-inputs {
            gap: var(--web-margin-l);
        }
    }
`;

export default StyledForm;
