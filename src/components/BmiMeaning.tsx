import {
    StyledBmiMeaning,
    StyledBmiMeaningContent,
    StyledColumns,
    StyledColumnOne,
    StyledColumnTwo,
    StyledImgContainer,
} from './styled/BmiMeaning.styled';
import Man from '../assets/image-man-eating.webp';

const BmiMeaning = () => {
    return (
        <StyledBmiMeaning as="section">
            <StyledBmiMeaningContent>
                <StyledColumns>
                    <StyledColumnOne>
                        <StyledImgContainer>
                            <img
                                src={Man}
                                alt="Man eating sushi"
                                width="1128"
                                height="1066"
                            />
                        </StyledImgContainer>
                    </StyledColumnOne>
                    <StyledColumnTwo>
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
                    </StyledColumnTwo>
                </StyledColumns>
            </StyledBmiMeaningContent>
        </StyledBmiMeaning>
    );
};

export default BmiMeaning;
