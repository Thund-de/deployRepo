/**
 * @author: Sakhr Al-absi
 * @Gruppe: 6
 * @Matrikelnummer: s0562218
 */
import React, { useState, useEffect } from "react";

const Checkbox = ({ categories, handleFilters }) => {
    const [checked, setCheked] = useState([]);

    const handleToggle = c => () => {
        // der erste Index oder -1 zurückgeben
        const currentCategoryId = checked.indexOf(c);
        const newCheckedCategoryId = [...checked];
        // Falls "currently checked" war nicht bereit in "checked"State  dann push
        // sonst pull/entfernen
        if (currentCategoryId === -1) {
            newCheckedCategoryId.push(c);
        } else {
            newCheckedCategoryId.splice(currentCategoryId, 1);
        }
        // console.log(newCheckedCategoryId);
        setCheked(newCheckedCategoryId);
        handleFilters(newCheckedCategoryId);
    };

    return categories.map((c, i) => (
        <li key={i} className="list-unstyled">
            <input
                onChange={handleToggle(c._id)}
                value={checked.indexOf(c._id === -1)}
                type="checkbox"
                className="form-check-input"
            />
            <label className="form-check-label">{c.name}</label>
        </li>
    ));
};

export default Checkbox;
