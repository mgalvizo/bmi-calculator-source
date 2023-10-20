import styled from 'styled-components';

const StyledBmiTip = styled.li`
    list-style-type: none;

    h3 {
        font-size: var(--heading-m-fsz);
        line-height: var(--heading-lht);
        margin-bottom: var(--web-margin-l);
        letter-spacing: -1px;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        display: grid;
        grid-template-columns: max-content;
        grid-template-rows: auto;
        grid-template-areas:
            'image title'
            'image description';
        align-items: center;
        column-gap: var(--web-margin-xl2);

        h3 {
            grid-area: title;
        }

        p {
            grid-area: description;
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        display: block;
    }
`;

const StyledImgContainer = styled.div`
    margin-bottom: var(--web-margin-xl);

    // 768px
    @media only screen and (min-width: 48em) {
        grid-area: image;
        margin-bottom: 0;
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        margin-bottom: var(--web-margin-xl2);
    }
`;

export { StyledBmiTip, StyledImgContainer };
