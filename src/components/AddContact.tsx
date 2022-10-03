import React, { useState } from "react";
import { IState as IProp } from "../App";

interface IProps {
    contacts: IProp["contacts"]
    setContacts: React.Dispatch<React.SetStateAction<IProps["contacts"]>>
}

const AddContact: React.FC<IProps> = ({ contacts, setContacts }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        contact_number: "",
        notes: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
       setInput({
        ...input,
        [e.target.name]: e.target.value
       }); 
    }

    const handleSubmit = (): void => {
        if (!input.name || !input.age || !input.contact_number) return;
        
        setContacts([
            ...contacts, {
                name: input.name,
                age: parseInt(input.age),
                contact_number: input.contact_number,
                notes: input.notes
            }
        ]);
    }

    return (
        <div className="add-form">
            <input type="text" placeholder="name" name="name" value={ input.name } onChange={handleChange} />
            <input type="number" placeholder="age" name="age" value={ input.age } onChange={handleChange} />
            <input type="text" placeholder="contact no." name="contact_number" value={ input.contact_number } onChange={handleChange} />
            <textarea placeholder="add notes here" name="notes" value={ input.notes } onChange={handleChange} />
            <button className="add-form-submit" name="submit" onClick={handleSubmit}>Add Contact +</button>
        </div>
    );
}

export default AddContact;