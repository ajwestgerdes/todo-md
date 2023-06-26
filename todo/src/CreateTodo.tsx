import React, { useState } from 'react';

interface Props {
  onSubmit: (formData: {
    dropdownValue: string;
    dateValue: Date | null;
    stringValue: string;
  }) => void;
}

export const CreateTodo: React.FC<Props> = ({ onSubmit }) => {
  const [dropdownValue, setDropdownValue] = useState<string>('');
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [stringValue, setStringValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ dropdownValue, dateValue, stringValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dropdown:
        <select
          value={dropdownValue}
          onChange={(event) => setDropdownValue(event.target.value)}
        >
          <option value="o1">One Time</option>
          <option value="o2">Reacurring</option>
        </select>
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={dateValue? dateValue.toISOString().slice(0, 10) : ''}
          onChange={(event) => setDateValue(new Date(event.target.value))}
        />
      </label>
      <br />
      <label>
        String:
        <input
          type="text"
          value={stringValue}
          onChange={(event) => setStringValue(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};