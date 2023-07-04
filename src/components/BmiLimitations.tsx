import StyledBmiLimitations from './styled/BmiLimitations';
import { v4 as uuidv4 } from 'uuid';
import Gender from '../assets/icon-gender.svg';
import Age from '../assets/icon-age.svg';
import Muscle from '../assets/icon-muscle.svg';
import Pregnancy from '../assets/icon-pregnancy.svg';
import Race from '../assets/icon-race.svg';
import BmiLimitation from './BmiLimitation';

const BMI_LIMITATIONS = [
    {
        id: uuidv4(),
        htmlId: 'gender',
        image: { src: Gender, alt: 'Merged female sign and male sign' },
        title: 'Gender',
        description: `The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.`,
    },
    {
        id: uuidv4(),
        htmlId: 'age',
        image: { src: Age, alt: 'Birthday cake' },
        title: 'Age',
        description: `In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.`,
    },
    {
        id: uuidv4(),
        htmlId: 'muscle',
        image: { src: Muscle, alt: 'Biceps flex' },
        title: 'Muscle',
        description: `BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.`,
    },
    {
        id: uuidv4(),
        htmlId: 'pregnancy',
        image: { src: Pregnancy, alt: 'Baby graphic' },
        title: 'Pregnancy',
        description: `Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.`,
    },
    {
        id: uuidv4(),
        htmlId: 'race',
        image: { src: Race, alt: 'Person graphic' },
        title: 'Race',
        description: `Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.`,
    },
];

const BmiLimitations = () => {
    const renderedCards = BMI_LIMITATIONS.map(limitation => {
        const { id } = limitation;
        return <BmiLimitation key={id} limitation={limitation} />;
    });

    return (
        <StyledBmiLimitations className="component">
            <div className="component__container">
                <div className="component__content">
                    <div className="section__info">
                        <h2>Limitations of BMI</h2>
                        <p>
                            Although BMI is often a practical indicator of
                            healthy weight, it is not suited for every person.
                            Specific groups should carefully consider their BMI
                            outcomes, and in certain cases, the measurement may
                            not be beneficial to use.
                        </p>
                    </div>
                    {renderedCards}
                </div>
            </div>
        </StyledBmiLimitations>
    );
};

export default BmiLimitations;
