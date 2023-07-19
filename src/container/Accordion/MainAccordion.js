import React from 'react';
import ParentAccordion from './ParentAccordion';

const MainAccordion = ({ data }) => {
  return (
  <>
  <ParentAccordion items={data}/>
  </>
  )
};

export default MainAccordion;