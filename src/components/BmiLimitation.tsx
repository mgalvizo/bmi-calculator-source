import { ReactNode } from 'react';
import StyledBmiLimitation from './styled/BmiLimitation.styled';

type BmiLimitation = {
    id: string;
    htmlId: string;
    image: { src: string; alt: string };
    title: string;
    description: string;
};

interface BmiLimitationProps {
    children?: ReactNode;
    limitation: BmiLimitation;
}

const BmiLimitation = ({ limitation }: BmiLimitationProps) => {
    const { htmlId, image, title, description } = limitation;

    return (
        <StyledBmiLimitation id={htmlId}>
            <h3>
                <img src={image.src} alt={image.alt} width="32" height="32" />{' '}
                <span>{title}</span>
            </h3>
            <p>{description}</p>
        </StyledBmiLimitation>
    );
};

export default BmiLimitation;
