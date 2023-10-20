import styled from 'styled-components';
import {
    Component,
    ComponentContainer,
    ComponentContent,
} from './Component.styled';

const StyledBmiTips = styled(Component)`
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;

    ul {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        gap: var(--web-margin-xl2);
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-right: var(--web-padding-l);
        padding-left: var(--web-padding-l);

        ul {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--web-margin-xl);
        }
    }
`;

const StyledBMITipsContainer = styled(ComponentContainer)`
    padding-top: calc(var(--web-padding-xl2) + var(--web-padding-m));
    padding-right: var(--web-padding-l);
    padding-bottom: calc(var(--web-padding-xl2) + var(--web-padding-m));
    padding-left: var(--web-padding-l);
    position: relative;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: var(--gradient);
        z-index: -1;
        opacity: 0.25;
        content: '';
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-top: calc(var(--web-padding-xl) * 2);
        padding-right: var(--web-padding-xl2);
        padding-bottom: calc(var(--web-padding-xl) * 2);
        padding-left: var(--web-padding-xl2);
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-left: var(--web-padding-l);
        padding-right: var(--web-padding-l);
        padding-top: calc(var(--web-padding-xl2) + var(--web-padding-xl));
        padding-bottom: calc(var(--web-padding-xl) * 3);

        &::before {
            border-radius: var(--border-rad);
        }
    }
`;

const StyledBMITipsContent = styled(ComponentContent)``;

export { StyledBmiTips, StyledBMITipsContainer, StyledBMITipsContent };
