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

    // 768px
    @media only screen and (min-width: 48em) {
        border-top-left-radius: var(--card-border-rad);
        border-bottom-left-radius: var(--card-border-rad);
        border-top-right-radius: 999px;
        border-bottom-right-radius: 999px;
    }
`;

const StyledWelcome = styled.div``;

const StyledWelcomeHeading = styled.h2`
    margin-bottom: var(--web-margin-m);
`;

const StyledWelcomeText = styled.p`
    font-size: var(--body-fsz-s);
`;

const StyledBMIResults = styled.div`
    // 768px
    @media only screen and (min-width: 48em) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        align-items: center;
        gap: var(--web-margin-l);
    }
`;

const StyledBMIResult = styled.div``;

const StyledBMIHeading = styled.h2`
    font-size: var(--heading-l-fsz);
    margin-bottom: var(--web-margin-l);
    letter-spacing: -1px;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: var(--heading-xl-fsz);
        margin-bottom: 0;
    }
`;

const StyledBMISummary = styled.div`
    font-size: var(--body-fsz-s);
`;

export {
    StyledResults,
    StyledWelcome,
    StyledWelcomeHeading,
    StyledWelcomeText,
    StyledBMIResults,
    StyledBMIResult,
    StyledBMIHeading,
    StyledBMISummary,
};
