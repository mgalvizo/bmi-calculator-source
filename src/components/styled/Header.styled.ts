import styled from 'styled-components';

// TODO

const StyledHeader = styled.header`
    position: relative;
    padding-top: var(--web-padding-xl);
    padding-bottom: calc(var(--web-padding-xl) * 2 + var(--web-padding-s));

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--gradient-ht-s);
        display: block;
        background-image: var(--gradient);
        border-bottom-left-radius: var(--border-rad);
        border-bottom-right-radius: var(--border-rad);
        content: '';
        z-index: -1;
    }

    .header-text {
        text-align: center;
        margin-bottom: calc(var(--web-margin-l) * 2);
    }

    .logo {
        margin-bottom: var(--web-margin-l);
    }

    h1 {
        font-size: var(--heading-l-fsz);
        line-height: var(--heading-lht);
        margin-bottom: var(--web-margin-l);
        letter-spacing: -3px;

        span {
            display: block;
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-bottom: calc(var(--web-padding-xl) * 3);

        .logo {
            margin-bottom: var(--web-margin-xl);
        }

        .header-text {
            margin-bottom: var(--web-margin-xl2);
        }

        p {
            max-width: 800px;
            margin: 0 auto;
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-top: 0;
        padding-bottom: calc(var(--web-padding-xl) * 2);

        &::before {
            content: none;
        }

        .component__container {
            position: relative;
            padding-left: var(--web-padding-l);
            padding-right: var(--web-padding-l);

            &::before {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: var(--gradient-ht-l);
                max-width: var(--gradient-w-l);
                display: block;
                background-image: var(--gradient);
                border-bottom-left-radius: var(--border-rad);
                border-bottom-right-radius: var(--border-rad);
                content: '';
                z-index: -1;
            }
        }

        .component__content {
            position: relative;
            padding-top: calc(
                var(--web-padding-xl) * 2 + var(--web-padding-s) + 3px
            );
            padding-bottom: calc(
                var(--web-padding-xl2) * 5 + var(--web-padding-s) + 2px
            );
        }

        .header-text {
            text-align: left;
            margin-bottom: 0;
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
            margin: 0;
        }
    }
`;

export default StyledHeader;
