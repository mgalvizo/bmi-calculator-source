import styled from 'styled-components';
import CurvedLineLeft from '../../assets/pattern-curved-line-left.svg';

const StyledBmiMeaning = styled.section`
    &.component {
        padding-left: 0;
        padding-right: 0;
    }

    padding-bottom: calc(var(--web-padding-xl) * 2 + var(--web-padding-s));

    .cols {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        gap: calc(var(--web-margin-xl2) + var(--web-margin-s));
    }

    .img__container {
        max-width: 464px;
        margin: 0 auto;
    }

    h2 {
        font-size: 3.2rem;
        line-height: var(--heading-lht);
        margin-bottom: var(--web-margin-xl);
        letter-spacing: -2px;
    }

    .col-2 {
        padding-left: var(--web-padding-l);
        padding-right: var(--web-padding-l);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-bottom: calc(var(--web-padding-xl) * 3);

        .cols {
            padding-top: var(--web-padding-xl2);
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: calc(var(--web-margin-xl) * 2 + var(--web-margin-s));
        }

        .col-1 {
            position: relative;
            width: 100%;
            height: 100%;
            overflow-x: clip;
        }

        .img__container {
            position: absolute;
            bottom: 0;
            right: 0;
            max-width: none;
        }

        img {
            max-width: 435px;
        }

        .col-2 {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            padding-left: 0;
            min-height: 300px;
        }
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        &.component {
            padding-left: var(--web-padding-l);
            padding-right: var(--web-padding-l);
        }

        .component__content {
            position: relative;

            &::after {
                position: absolute;
                top: calc(
                    (
                            var(--web-padding-xs) + var(--web-padding-s) +
                                var(--web-padding-xl2)
                        ) * -1
                );
                right: var(--web-margin-l);
                width: 85px;
                height: 200px;
                background-image: url(${CurvedLineLeft});
                content: '';
            }
        }

        .cols {
            padding-top: calc(
                var(--web-padding-l) + var(--web-padding-xl2) * 3
            );
            grid-template-columns: 564px 1fr;
            gap: calc(var(--web-margin-xl) * 4);
        }

        img {
            max-width: 564px;
        }

        .col-2 {
            padding-right: 0;
            min-height: 388px;
        }

        h2 {
            font-size: var(--heading-l-fsz);
        }

        p {
            max-width: 465px;
        }
    }
`;

export default StyledBmiMeaning;
