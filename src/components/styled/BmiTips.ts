import styled from 'styled-components';

const StyledBmiTips = styled.section`
    padding-bottom: 0;

    &.component {
        padding-left: 0;
        padding-right: 0;
    }

    .component__container {
        padding-left: var(--web-padding-l);
        padding-right: var(--web-padding-l);
        padding-top: calc(var(--web-padding-xl2) + var(--web-padding-m));
        padding-bottom: calc(var(--web-padding-xl2) + var(--web-padding-m));
        position: relative;

        &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--light-blue);
            background-image: var(--gradient);
            z-index: -1;
            opacity: 0.25;
            content: '';
        }
    }

    ul {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        gap: var(--web-margin-xl2);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        .component__container {
            padding-left: var(--web-padding-xl2);
            padding-right: var(--web-padding-xl2);
            padding-top: calc(var(--web-padding-xl) * 2);
            padding-bottom: calc(var(--web-padding-xl) * 2);
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        &.component {
            padding-left: var(--web-padding-l);
            padding-right: var(--web-padding-l);
        }

        .component__container {
            padding-left: var(--web-padding-l);
            padding-right: var(--web-padding-l);
            padding-top: calc(var(--web-padding-xl2) + var(--web-padding-xl));
            padding-bottom: calc(var(--web-padding-xl) * 3);

            &::before {
                border-radius: var(--border-rad);
            }
        }

        ul {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--web-margin-xl);
        }
    }
`;

export default StyledBmiTips;
