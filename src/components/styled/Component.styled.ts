import styled from 'styled-components';

const Component = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding-left: var(--web-padding-l);
    padding-right: var(--web-padding-l);
`;

const ComponentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    flex-basis: var(--max-design-width);
`;

const ComponentContent = styled.div`
    flex-basis: var(--max-content-width);
`;

export { Component, ComponentContainer, ComponentContent };
