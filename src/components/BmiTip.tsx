import { ReactNode } from 'react';
import StyledBmiTip from './styled/BmiTip';

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
            <div className="img__container">
                <img src={image.src} alt={image.alt} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </StyledBmiTip>
    );
};

export default BmiTip;
