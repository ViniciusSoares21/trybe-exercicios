import React, { useContext, useState } from 'react'
import FormContext from '../context/FormContext';

function FormInputs() {
  const [formData, setFormData] = useState({
    nameComplet: "",
    age: 0,
    city: "",
    module: "",

  })

  const { createForms } = useContext(FormContext)

  const hadleChange = ({target}) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [target.name]: target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = {
      name: formData.nameComplet,
      age: formData.age,
      city: formData.city,
      module: formData.module,
    }

    createForms(newForm);
  }
  return (
    <section>
      <form>
        <label>
          <input 
          type="text"
          name="nameComplet"
          value={formData.nameComplet}
          onChange={hadleChange}
          placeholder="Nome completo:"
          />
        </label>
        <label>
          <input 
          type="number"
          name="age"
          value={formData.age}
          onChange={hadleChange}
          placeholder="Idade:"
          />
        </label>
        <label>
          <input 
          type="text"
          name="city"
          value={formData.city}
          onChange={hadleChange}
          placeholder="Cidade:"
          />
        </label>
        <label htmlFor="fund">
          Fundamentos
          <input 
          type="radio" 
          value="Fundamentos"
          checked={ formData.module === 'Fundamentos' }
          onChange={hadleChange}
          name="module" 
          id="fund"/>
        </label>
        <label htmlFor="Front">
          Front-end
          <input 
          type="radio" 
          value="Front-end"
          checked={ formData.module === 'Front-end' }
          onChange={hadleChange}
          name="module" 
          id="Front"/>
        </label>
        <label htmlFor="Back">
          Back-end
          <input 
          type="radio" 
          value="Back-end"
          checked={ formData.module === 'Back-end' }
          onChange={hadleChange}
          name="module" 
          id="Back"/>
        </label>
        <label htmlFor="Ciência">
        Ciência da Computação
          <input 
          type="radio" 
          value="Ciência da Computação"
          checked={ formData.module === 'Ciência da Computação' }
          onChange={hadleChange}
          name="module" 
          id="Ciência"/>
        </label>
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
        
      </form>
    </section>
  )
}

export default FormInputs