import { useState, useCallback } from 'react';
import GlobalStyle from './components/styled/GlobalStyles.styled';
import Header from './components/UI/Header.tsx';
import Logo from './assets/logo.svg';
import Calculator from './components/Calculator.tsx';
import Unit from './components/Unit.tsx';
import Form from './components/Form.tsx';
import { FormData } from './components/Form.tsx';
import Results from './components/Results.tsx';
import Main from './components/UI/Main.tsx';
import BmiMeaning from './components/BmiMeaning.tsx';

const App = () => {
    const [unit, setUnit] = useState<string>('metric');
    const [data, setData] = useState({});

    const handleUnit = (unit: string) => {
        setUnit(unit);
        setData({});
    };

    const handleData = useCallback((data: FormData) => {
        setData(data);
    }, []);

    return (
        <>
            <GlobalStyle />
            <Header>
                <div className="component__container">
                    <div className="component__content">
                        <div className="header-text">
                            <img
                                className="logo"
                                src={Logo}
                                alt="Website logo"
                            />
                            <h1>
                                <span>Body Mass</span>
                                <span>Index Calculator</span>
                            </h1>
                            <p>
                                Better understand your weight in relation to
                                your height using our body mass index (BM)
                                calculator. While BMI is not the sole
                                determinant of a healthy weight, it offers a
                                valuable starting point to evaluate your overall
                                health and well-being.
                            </p>
                        </div>
                        <Calculator>
                            <div className="calculator__content">
                                <strong className="form-instruction">
                                    Enter your details below
                                </strong>
                                <Unit handleUnit={handleUnit} />
                                <Form unit={unit} handleData={handleData} />
                                <Results data={data} unit={unit} />
                            </div>
                        </Calculator>
                    </div>
                </div>
            </Header>
            <Main>
                <BmiMeaning />
            </Main>
        </>
    );
};

export default App;
