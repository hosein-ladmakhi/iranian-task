import { httpGetClient } from '@/lib';

export const fetchUsers = () => httpGetClient('/users');
