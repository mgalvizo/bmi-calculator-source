import styled from 'styled-components';

const StyledHeader = styled.header`
    .component__content {
        flex-basis: var(--max-design-width);
    }

    .gradient__container {
        padding-top: var(--web-padding-xl);
        padding-bottom: calc(var(--web-padding-xl2) * 5 + var(--web-padding-m));
        background-color: var(--light-blue);
        background-image: var(--gradient);
        border-bottom-left-radius: var(--border-rad);
        border-bottom-right-radius: var(--border-rad);
        text-align: center;
    }

    .logo {
        margin-bottom: var(--web-margin-l);
    }

    h1 {
        font-size: var(--heading-l-fsz);
        font-weight: var(--heading-weight);
        line-height: var(--heading-lht);
        margin-bottom: var(--web-margin-l);

        span {
            display: block;
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        .gradient__content {
            padding-bottom: calc(var(--web-padding-xl2) * 8);
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-left: var(--web-padding-l);

        .gradient__container {
            max-width: 978px;
            padding-top: calc(var(--web-padding-xl2) + var(--web-padding-xl));
            padding-bottom: calc(var(--web-margin-xl2) * 5);
            padding-left: calc(
                (var(--web-padding-xl2) * 2) + var(--web-padding-xl)
            );
            text-align: left;
        }

        .logo {
            margin-bottom: calc(var(--web-margin-xl2) * 3);
        }

        h1 {
            font-size: var(--heading-xl-fsz);
            margin-bottom: var(--web-margin-xl);
        }

        p {
            max-width: 465px;
        }
    }
`;

export default StyledHeader;
