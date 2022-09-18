import React, { useState } from 'react'
/* import PropTypes from 'prop-types' */
import FormContext from './FormContext';

function FormProvider({children}) {
  const [ forms, setForms] = useState([]);

  const createForms = (newForm) => {
    setForms((prevForms) => ([
      ...prevForms,
      newForm,
    ]));
  };

  const contextValue = {
    forms,
    createForms,
  }
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  )
}

/* FormProvider.propTypes = {
  childrem: PropTypes.node.isRequired,
}
 */
export default FormProvider;