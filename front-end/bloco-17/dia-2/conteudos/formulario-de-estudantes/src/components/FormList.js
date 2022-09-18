import React, { useContext } from 'react'
import FormContext from '../context/FormContext';
function FormList() {
  const { forms } = useContext(FormContext);
  return (
    <section>
      {forms.map((form, index) => (
        <ul key={index}>
          <p>{form.name}</p>
          <p>{form.age}</p>
          <p>{form.city}</p>
          <p>{form.module}</p>
        </ul>
      ))}
    </section>
  )
}

export default FormList;