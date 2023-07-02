import { ReactNode } from 'react';
import StyledMain from '../styled/Main.styled';

interface MainProps {
    children?: ReactNode;
}

const Main = ({ children }: MainProps) => {
    return <StyledMain>{children}</StyledMain>;
};

export default Main;
