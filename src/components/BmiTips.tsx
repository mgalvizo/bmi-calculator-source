import { v4 as uuidv4 } from 'uuid';
import {
    StyledBmiTips,
    StyledBMITipsContainer,
    StyledBMITipsContent,
} from './styled/BmiTips.styled';
import BmiTip from './BmiTip';
import Meal from '../assets/icon-eating.svg';
import Dumbbell from '../assets/icon-exercise.svg';
import Moon from '../assets/icon-sleep.svg';

const BMI_TIPS = [
    {
        id: uuidv4(),
        image: {
            src: Meal,
            alt: 'A bowl with food',
        },
        title: 'Healthy eating',
        description:
            'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
    },
    {
        id: uuidv4(),
        image: {
            src: Dumbbell,
            alt: 'A dumbbell',
        },
        title: 'Regular exercise',
        description:
            'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
    },
    {
        id: uuidv4(),
        image: {
            src: Moon,
            alt: 'Moon and the stars',
        },
        title: 'Adequate sleep',
        description:
            'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
    },
];

const BmiTips = () => {
    const renderedTips = BMI_TIPS.map(tip => {
        const { id } = tip;
        return <BmiTip key={id} tip={tip} />;
    });

    return (
        <StyledBmiTips as="section">
            <StyledBMITipsContainer>
                <StyledBMITipsContent>
                    <ul>{renderedTips}</ul>
                </StyledBMITipsContent>
            </StyledBMITipsContainer>
        </StyledBmiTips>
    );
};

export default BmiTips;
