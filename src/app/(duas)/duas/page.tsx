"use client";
import { useRouter } from 'next/navigation';

const DuasPage = () => {
  const router = useRouter();

  return router.push(`/duas/dua's-importance?cat=1`);
};

export default DuasPage;