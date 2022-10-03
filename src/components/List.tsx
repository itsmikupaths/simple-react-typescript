import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ contacts }) => {
    const renderList = (): JSX.Element[] => {
        return contacts.map ((contact, i) => {
            return (
                <li key={i} className="list-item">
                    <span>Name: { contact.name }</span>
                    <span>Age: { contact.age }</span>
                    <span>Contact No.: { contact.contact_number }</span>
                    <span>Notes: { contact.notes }</span>
                    <div className="list-item-actions">
                        <button className="list-item-action-edit">Edit</button>
                        <button className="list-item-action-delete">Delete</button>
                    </div>
                </li>
            );
        });
    }

    return (
        <div className="contact-list-wrapper">
            <ul className="list">
                {renderList()}
            </ul>
        </div>
    );
}

export default List;