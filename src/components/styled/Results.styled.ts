import styled from 'styled-components';

const StyledResults = styled.div`
    padding: var(--web-padding-xl);
    background-color: var(--blue);
    background-image: var(--gradient-2);
    color: var(--white);
    border-radius: var(--card-border-rad);

    h2 {
        line-height: var(--heading-lht);
    }

    .welcome-heading {
        margin-bottom: var(--web-margin-m);
    }

    .bmi-heading {
        font-size: var(--heading-l-fsz);
        margin-bottom: var(--web-margin-l);
        letter-spacing: -1px;
    }

    .bmi__summary,
    .welcome__text {
        font-size: var(--body-fsz-s);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        border-top-left-radius: var(--card-border-rad);
        border-bottom-left-radius: var(--card-border-rad);
        border-top-right-radius: 999px;
        border-bottom-right-radius: 999px;

        .results {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            align-items: center;
            gap: var(--web-margin-l);
        }

        .bmi-heading {
            font-size: var(--heading-xl-fsz);
            margin-bottom: 0;
        }
    }
`;

export default StyledResults;
