import {
    StyledHeader,
    StyledHeaderContainer,
    StyledHeaderContent,
    StyledLogo,
    StyledHeaderText,
} from '../styled/Header.styled';
import Calculator from '../Calculator';
import Logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <StyledHeader as="header">
            <StyledHeaderContainer>
                <StyledHeaderContent>
                    <StyledHeaderText>
                        <StyledLogo
                            src={Logo}
                            alt="Website logo"
                            width="64"
                            height="64"
                        />
                        <h1>
                            <span>Body Mass</span>
                            <span>Index Calculator</span>
                        </h1>
                        <p>
                            Better understand your weight in relation to your
                            height using our body mass index (BM) calculator.
                            While BMI is not the sole determinant of a healthy
                            weight, it offers a valuable starting point to
                            evaluate your overall health and well-being.
                        </p>
                    </StyledHeaderText>
                    <Calculator />
                </StyledHeaderContent>
            </StyledHeaderContainer>
        </StyledHeader>
    );
};

export default Header;
