import { ReactNode } from 'react';
import { StyledBmiTip, StyledImgContainer } from './styled/BmiTip.styled';

type BmiTip = {
    id: string;
    image: { src: string; alt: string };
    title: string;
    description: string;
};

interface BmiTipProps {
    children?: ReactNode;
    tip: BmiTip;
}

const BmiTip = ({ tip }: BmiTipProps) => {
    const { image, title, description } = tip;

    return (
        <StyledBmiTip>
            <StyledImgContainer>
                <img src={image.src} alt={image.alt} />
            </StyledImgContainer>
            <h3>{title}</h3>
            <p>{description}</p>
        </StyledBmiTip>
    );
};

export default BmiTip;
