'use client';

import { useEffect, useState } from 'react';
import { Slideshow } from '@/components/Slideshow';
import { SprintSlide } from '@/components/Slides';
import { fetchSprints, type Sprint } from '@/lib/supabase';

export default function SprintsPage() {
  const [sprints, setSprints] = useState<Sprint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSprints()
      .then((data) => {
        setSprints(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'var(--font-body)',
          color: 'var(--pe-gray-500)',
        }}
      >
        Loading sprints...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'var(--font-body)',
          color: 'var(--pe-error)',
          gap: '1rem',
        }}
      >
        <p>Error loading sprints: {error}</p>
      </div>
    );
  }

  if (sprints.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'var(--font-body)',
          color: 'var(--pe-gray-500)',
        }}
      >
        No sprints found.
      </div>
    );
  }

  return (
    <Slideshow>
      {sprints.map((sprint) => (
        <SprintSlide key={sprint.id} sprint={sprint} />
      ))}
    </Slideshow>
  );
}
