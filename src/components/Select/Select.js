import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const InnerSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;


const PresentationalSelect = styled.div`
  
  background-color: ${COLORS.transparentGray35};
  border-radius: 8px;
  border: none;
  height: 2.5em;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  color: inherit;
  font-size: 16px;
  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  
  

  ${InnerSelect}:focus + &  {
   outline: 5px auto -webkit-focus-ring-color;
  }
  
  
`;




const DisplayValue = styled.div`
  padding-right: 32px;
`;


const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: 24px;
  width: 24px;
  color: inherit;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black}
  }

`;



const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (

    <Wrapper>
      <InnerSelect value={value} onChange={onChange}>
        {children}
      </InnerSelect>
      <PresentationalSelect>
        <DisplayValue>
          {displayedValue}
        </DisplayValue>
        <IconWrapper id="chevron-down" strokeWidth={1} size={24} />
      </PresentationalSelect>
    </Wrapper>

  );
};



export default Select;
