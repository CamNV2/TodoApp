import React, { useState } from 'react'
import './Form.component.css'

export const FormToDo = ({ onSubmit }) => {
    const [value, setValue] = useState('')
    function handleValueForm(e) {
        setValue(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();

        if (!onSubmit) return;
        const formValues = {
            title: value,
            complete: false
        }
        onSubmit(formValues);
        setValue('')
    }
    return (
        <div >
            <form onSubmit={handleSubmit} className="form_submit">
                <input className="input_submit"
                    type="text"
                    value={value}
                    onChange={handleValueForm} required />
                <button type="submit" className="button_add"><i className="fas fa-plus-circle submit_icon"></i></button>
            </form>
        </div>
    )
}
