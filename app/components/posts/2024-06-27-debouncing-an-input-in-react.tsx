'use client';

import { useEffect, useState } from 'react';

const fakeData: { id: number; title: string }[] = [
  {
    id: 1,
    title: 'Elephant',
  },
  {
    id: 2,
    title: 'Lion',
  },
  {
    id: 3,
    title: 'Tiger',
  },
  {
    id: 4,
    title: 'Penguin',
  },
  {
    id: 5,
    title: 'Mongoose',
  },
];

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(fakeData);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredData(fakeData);
      return;
    }

    setFilteredData(fakeData.filter((item) => item.title.includes(searchTerm)));
  }, [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full px-4 py-7 bg-stone-200 rounded-md flex flex-col gap-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search animals..."
      />
      <ul>
        {filteredData.map((item) => {
          return (
            <li key={item.id} className="text-stone-800">
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const DebouncedSearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(fakeData);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm === '') {
        setFilteredData(fakeData);
        return;
      }

      setFilteredData(
        fakeData.filter((item) => item.title.includes(searchTerm))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full px-4 py-7 bg-stone-200 rounded-md flex flex-col gap-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search animals..."
      />
      <ul>
        {filteredData.map((item) => {
          return (
            <li key={item.id} className="text-stone-800">
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
