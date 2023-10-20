import styled from 'styled-components';
import {
    Component,
    ComponentContainer,
    ComponentContent,
} from './Component.styled';
import CurvedLineRight from '../../assets/pattern-curved-line-right.svg';

const StyledBmiLimitations = styled(Component)`
    padding-top: calc(var(--web-padding-xl2) + var(--web-padding-xl));
    padding-bottom: calc(var(--web-padding-xl) * 3);

    h2 {
        font-size: 3.2rem;
        line-height: var(--heading-lht);
        letter-spacing: -2px;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-top: calc(var(--web-padding-xl) * 3);
        padding-bottom: calc(var(--web-padding-xl) * 3);

        #gender {
            grid-area: gender;
        }

        #age {
            grid-area: age;
        }

        #muscle {
            grid-area: muscle;
        }

        #pregnancy {
            grid-area: pregnancy;
        }

        #race {
            grid-area: race;
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        padding-top: calc(var(--web-padding-xl2) * 3);
        padding-bottom: calc(var(--web-padding-xl2) * 3);

        h2 {
            font-size: var(--heading-l-fsz);
        }
    }
`;

const StyledBmiLimitationsContainer = styled(ComponentContainer)``;

const StyledBmiLimitationsContent = styled(ComponentContent)`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: var(--web-margin-m);

    // 768px
    @media only screen and (min-width: 48em) {
        grid-template-areas:
            'info info info info'
            'gender gender age age'
            'muscle muscle pregnancy pregnancy'
            '. race race .';
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: var(--web-margin-l);
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        position: relative;
        grid-template-areas:
            'info info info info info info info . . gender gender gender gender gender .'
            '. . . . . age age age age age muscle muscle muscle muscle muscle'
            '. . . pregnancy pregnancy pregnancy pregnancy pregnancy race race race race race . .';
        grid-template-columns: repeat(15, 1fr);
        grid-column-gap: var(--web-padding-xl);

        &::before {
            position: absolute;
            top: calc(
                var(--web-margin-xl2) * 6 + var(--web-margin-xs) +
                    var(--web-margin-s)
            );
            left: calc(var(--web-margin-xl2) * 4 + var(--web-margin-xs));
            width: 94px;
            height: 122px;
            background-image: url(${CurvedLineRight});
            content: '';
        }
    }
`;

const StyledBmiLimitationsInfo = styled.div`
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    gap: var(--web-margin-xl);
    margin-bottom: var(--web-margin-xl);

    // 768px
    @media only screen and (min-width: 48em) {
        grid-area: info;
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        text-align: left;
        margin-bottom: 0;
    }
`;

export {
    StyledBmiLimitations,
    StyledBmiLimitationsContainer,
    StyledBmiLimitationsContent,
    StyledBmiLimitationsInfo,
};
