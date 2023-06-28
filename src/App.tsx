import GlobalStyle from './components/styled/GlobalStyles.styled';
import Header from './components/UI/Header.tsx';
import Logo from './assets/logo.svg';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header>
                <div className="component__content">
                    <div className="gradient__container">
                        <img className="logo" src={Logo} alt="Website logo" />
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
                    </div>
                </div>
            </Header>
        </>
    );
};

export default App;
