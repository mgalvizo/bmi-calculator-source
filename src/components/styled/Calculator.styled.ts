import styled from 'styled-components';

const StyledCalculator = styled.div``;

const StyledCalculatorContent = styled.div`
    width: 100%;
    background-color: var(--white);
    padding: var(--web-padding-l);
    border-radius: var(--card-border-rad);
    box-shadow: var(--card-box-shadow);
    display: flex;
    flex-flow: column wrap;
    gap: var(--web-margin-l);

    // 768px
    @media only screen and (min-width: 48em) {
        padding: var(--web-padding-xl);
        max-width: 686px;
        margin: 0 auto;
        gap: var(--web-margin-xl);
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 564px;
        margin: 0;
        transform: translateY(167px);
    }
`;

const StyledFormInstruction = styled.strong`
    font-size: var(--heading-m-fsz);
    line-height: var(--heading-lht);
    letter-spacing: -1.2px;
    font-weight: var(--semibold);
`;

export { StyledCalculator, StyledCalculatorContent, StyledFormInstruction };
