import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: any) {
  const { 'santosadmin.token': token } = parseCookies(ctx);
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}

export const api = getAPIClient();


// export async function getServerSideProps(context) {
//   const { ['estech.token']: token } = parseCookies(context);

//   if (!token) {
//     return {
//       redirect: {
//         destination: `/auth/login?from=${context.resolvedUrl}`,
//         permanent: false,
//       },
//     };
//   }
// }