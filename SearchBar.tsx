import React, { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (url: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <input
        type="text"
        placeholder="Enter URL to check..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: '100%',
          padding: '1rem',
          fontSize: '1.25rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
    </form>
  );
};

export default SearchBar;
