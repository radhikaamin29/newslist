import React, { useState, useEffect, useRef } from "react";
import '../styles/dropDown.css';
import Countries from './Countries.json';

export default function CountryDropdown({ prompt, value1, onChange }) {
  
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);


  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(Countries) {
    return Countries.filter(
      (Country) => Country.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value1) return value1.name;
    return "";
  }


  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">
        
          <input
            type="text"
            ref={ref}
            placeholder={value1 ? value1.name : prompt}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            value={displayValue()}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {filter(Countries).map((Country) => (
          <div
         
            className={`option ${value1 === Country ? "selected" : null}`}
            onClick={() => {
              setQuery("");
              onChange(Country);
              setOpen(false);
            }}
          >
            {Country.name}
          </div>
        ))}
      </div>
    </div>
  );
}
