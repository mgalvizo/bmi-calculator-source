import StyledBmiMeaning from './styled/BmiMeaning.styled';
import Man from '../assets/image-man-eating.webp';

const BmiMeaning = () => {
    return (
        <StyledBmiMeaning className="component">
            <div className="component__content">
                <div className="cols">
                    <div className="col col-1">
                        <div className="img__container">
                            <img src={Man} alt="Man eating sushi" />
                        </div>
                    </div>
                    <div className="col col-2">
                        <h2>What your BMI result means</h2>
                        <p>
                            A BMI range of 18.5 to 24.9 is considered a 'healthy
                            weight.' Maintaining a healthy weight may lower your
                            chances of experiencing health issues later on, such
                            as obesity and type 2 diabetes. Aim for a nutritious
                            diet with reduced fat and sugar content,
                            incorporating ample fruits and vegetables.
                            Additionally, strive for regular physical activity,
                            ideally about 30 minutes daily for five days a week.
                        </p>
                    </div>
                </div>
            </div>
        </StyledBmiMeaning>
    );
};

export default BmiMeaning;
