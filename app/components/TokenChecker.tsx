'use client';

import React, { useEffect, useState } from 'react';
import Button from './Button';
import { Sacramento } from 'next/font/google';
const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
});

const TokenChecker = () => {
  const token = 'Q7rP9';

  const [show, setShow] = useState(true);
  const [tokenValue, setTokenValue] = useState('');
  const [error, setError] = useState<string>();

  useEffect(() => {
    const token = sessionStorage.getItem('bp-token');
    if (token) setShow(false);
  }, []);

  const handleChange = (event: any) => {
    setTokenValue(event.target.value);
    if (event.target.value === '') setError('');
    if (event.target.value.length > 8) setError('The token is invalid');
  };

  const handleSubmit = () => {
    if (tokenValue !== token)
      return setError('The token is invalid, provide a valid token.');
    else {
      sessionStorage.setItem('bp-token', tokenValue);
      setError('');
      setShow(false);
    }
  };

  return (
    <div>
      {show && (
        <div className="fixed flex items-center justify-stretch top-0 left-0 bg-[#333] h-screen w-screen z-10">
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <article className="text-white text-center flex flex-col mb-5 gap-2">
              <h3
                className={`text-3xl md:text-5xl font-bold ${sacramento.className}`}
              >
                Welcome, BonniePerez Here!
              </h3>
              <p className="text-gray-500">
                Provide your access token to access the website.
              </p>
            </article>

            <input
              onChange={handleChange}
              type="text"
              autoFocus
              value={tokenValue}
              className="text-white bg-transparent border px-5 py-3 outline-none w-[60%]"
              placeholder="Enter access token"
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}

            <Button
              variation="fill"
              colorScheme="light"
              size="md"
              type="button"
              title="contact"
              onClick={handleSubmit}
            >
              Submit token
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenChecker;
