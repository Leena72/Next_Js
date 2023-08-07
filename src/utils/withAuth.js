'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();


    useEffect(() => {
      const proposalNo = JSON.parse(localStorage.getItem('proposalNo'));
      const proposalNoIsAuthenticated = proposalNo !== null;
      if (!proposalNoIsAuthenticated) {
        router.push('/customer-portal');
      }
    }, [router]);

    return <Component {...props} />;
  };
}
