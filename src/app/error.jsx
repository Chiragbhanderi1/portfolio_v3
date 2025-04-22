'use client';
import ErrorMessage from '@/components/ErrorMessage';

export default function Error({ error, reset }) {
  return (
    <ErrorMessage 
      error={error}
      reset={reset}
    />
  );
}