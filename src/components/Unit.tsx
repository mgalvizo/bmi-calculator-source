import { ReactNode } from 'react';
import StyledUnit from './styled/Unit.styled';

interface UnitProps {
    children?: ReactNode;
    handleUnit: (unit: string) => void;
}

const Unit = ({ handleUnit }: UnitProps) => {
    return (
        <StyledUnit>
            <fieldset>
                <legend className="visually-hidden">Select a unit:</legend>
                <div className="radio__container">
                    <div className="radio-control">
                        <input
                            type="radio"
                            name="unit"
                            id="metric"
                            value="metric"
                            defaultChecked={true}
                            onChange={e => handleUnit(e.target.value)}
                        />

                        <label htmlFor="metric">Metric</label>
                    </div>
                    <div className="radio-control">
                        <input
                            type="radio"
                            name="unit"
                            id="imperial"
                            value="imperial"
                            onChange={e => handleUnit(e.target.value)}
                        />
                        <label htmlFor="imperial">Imperial</label>
                    </div>
                </div>
            </fieldset>
        </StyledUnit>
    );
};

export default Unit;
