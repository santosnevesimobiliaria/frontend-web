import { api } from "../axios";
import { TypeFormData } from '@/schemas/defaultLoginSchema';

export async function LoginAuth (loginData: TypeFormData ) {
  const response = api.post('/auth/login', loginData);
  return response;
} 