import { ReactNode } from 'react';
import {
    StyledUnit,
    StyledRadioContainer,
    StyledRadioControl,
} from './styled/Unit.styled';
import { VisuallyHidden } from './styled/VisuallyHidden.styled';

interface UnitProps {
    children?: ReactNode;
    handleUnit: (unit: string) => void;
}

const Unit = ({ handleUnit }: UnitProps) => {
    return (
        <StyledUnit>
            <fieldset>
                <legend className="visually-hidden">
                    <VisuallyHidden>Select a unit:</VisuallyHidden>
                </legend>
                <StyledRadioContainer>
                    <StyledRadioControl>
                        <input
                            type="radio"
                            name="unit"
                            id="metric"
                            value="metric"
                            defaultChecked={true}
                            onChange={e => handleUnit(e.target.value)}
                        />
                        <label htmlFor="metric">Metric</label>
                    </StyledRadioControl>
                    <StyledRadioControl>
                        <input
                            type="radio"
                            name="unit"
                            id="imperial"
                            value="imperial"
                            onChange={e => handleUnit(e.target.value)}
                        />
                        <label htmlFor="imperial">Imperial</label>
                    </StyledRadioControl>
                </StyledRadioContainer>
            </fieldset>
        </StyledUnit>
    );
};

export default Unit;
