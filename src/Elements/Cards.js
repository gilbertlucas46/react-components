import styled from 'styled-components';
import { elevation, transition } from 'Utilities';

export const Card = styled.div`
    border-radius: 4px;
    background-color: white;
    padding: 15px;
    ${elevation[4]};
    ${transition({})};
    &:hover {
        ${elevation[5]};
    }
`;