/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const parametersWrapper = {
   large: {
      height: '24px',
      borderRadius: '3px',
      padding: '4px'
   },
   medium: {
      height: '12px',
      borderRadius: '3px',
      padding: 0
   },
   small: {
      height: '8px',
      borderRadius: '3px',
      padding: 0
   },
}

const getInnerProps = (props, value) => {
   const propsInner = {}
   const borderRadius = value === 100 ? props.borderRadius : '0';
   propsInner['innerRadius'] = props.borderRadius + ' ' + borderRadius + ' ' +
      borderRadius + ' ' + props.borderRadius
   propsInner['width'] = value + '%'
   return propsInner;
}

const ProgressBar = ({ value, size }) => {

   const props = size === 'large' ? parametersWrapper['large'] : (size === 'medium' ?
      parametersWrapper['medium'] : parametersWrapper['small']);

   return <Wrapper {...props} aria-valuemin="0" aria-valuemax="100" aria-valuenow={value} > <InnerProgressBar {...getInnerProps(props, value)} /></Wrapper>;
};

const Wrapper = styled.div`
   width: 100%;
   background-color: ${COLORS.gray50};
   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
   height: ${props => props.height};
   border-radius: ${props => props.borderRadius};
   padding: ${props => props.padding};
`;


const InnerProgressBar = styled.div`
   background-color:${COLORS.primary};
   width: ${props => props.width};
   height: 100%;
   border-radius: ${props => props.innerRadius} ;
`;

export default ProgressBar;
