import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const parametersInput = {
   small: {
      border: '1px',
      fontSize: '14px',
      iconSize: 16,
      paddingIcon: 24,
      padding: 4
   },
   large: {
      border: '2px',
      fontSize: '18px',
      iconSize: 24,
      paddingIcon: 32,
      padding: 8
   }
}


const InnerInput = styled.input`
  border: none;
  border-bottom: ${props => (props.border + ' solid #000000')};
  font-weight: 700;
  font-size: ${props => props.fontSize};
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500}
  };
  width: ${props => props.width ? props.width : '100%'} ;
  padding: ${props => (props.padding + 'px')};
  padding-left: ${props => (props.paddingIcon + 'px')};
  &:focus {
    outline-offset: 2px;
  };
  color: inherit;
`;

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
  
`;

const InnerIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  
  
`;

const IconInput = ({
   label,
   icon,
   width = 250,
   size,
   placeholder,
}) => {
   const parInput = parametersInput[size]
   return (
      <Wrapper>
         <VisuallyHidden>{label}</VisuallyHidden>
         <InnerIcon id={icon} size={parInput.iconSize} />
         <InnerInput {...parInput} placeholder={placeholder} width={width + 'px'} />
      </Wrapper>
   );
};

export default IconInput;
