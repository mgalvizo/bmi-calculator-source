import styled from 'styled-components';

const StyledBmiLimitation = styled.div`
    padding: var(--web-padding-l);
    background-color: var(--white);
    border-radius: var(--card-border-rad);
    box-shadow: var(--card-box-shadow);

    h3 {
        display: flex;
        flex-flow: row wrap;
        gap: var(--web-margin-m);
        justify-content: start;
        align-items: center;
        margin-bottom: var(--web-margin-m);
        font-size: 2rem;
        letter-spacing: -1px;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding: var(--web-padding-xl);
    }
`;

export default StyledBmiLimitation;
