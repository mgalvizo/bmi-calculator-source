import { useState } from 'react';
import GlobalStyle from './components/styled/GlobalStyles.styled';
import Header from './components/UI/Header.tsx';
import Logo from './assets/logo.svg';
import Calculator from './components/Calculator.tsx';
import Unit from './components/Unit.tsx';
import Form from './components/Form.tsx';
import Results from './components/Results.tsx';
import { FormData } from './components/Form.tsx';

const App = () => {
    const [unit, setUnit] = useState<string>('metric');
    const [data, setData] = useState({});

    const handleUnit = (unit: string) => {
        setUnit(unit);
    };

    const handleData = (data: FormData) => {
        setData(data);
    };

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
                    <Calculator>
                        <h3>Enter your details below</h3>
                        <Unit handleUnit={handleUnit} />
                        <Form unit={unit} handleData={handleData} />
                        <Results data={data} />
                    </Calculator>
                </div>
            </Header>
        </>
    );
};

export default App;
