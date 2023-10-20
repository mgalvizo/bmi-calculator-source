import GlobalStyle from './components/styled/GlobalStyles.styled';
import Header from './components/UI/Header.tsx';
import Main from './components/UI/Main.tsx';
import BmiMeaning from './components/BmiMeaning.tsx';
import BmiTips from './components/BmiTips.tsx';
import BmiLimitations from './components/BmiLimitations.tsx';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main>
                <BmiMeaning />
                <BmiTips />
                <BmiLimitations />
            </Main>
        </>
    );
};

export default App;
