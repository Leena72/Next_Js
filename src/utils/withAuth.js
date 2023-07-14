'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const proposalNo = JSON.parse(localStorage.getItem('proposalNo'));
    const proposalNoIsAuthenticated = proposalNo !== null;

    useEffect(() => {
      if (!proposalNoIsAuthenticated) {
        router.push('/login');
      }
    }, [proposalNoIsAuthenticated, router]);

    return <Component {...props} />;
  };
}
