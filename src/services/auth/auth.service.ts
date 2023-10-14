import HttpService from '../http/http.service';
import { AxiosResponse } from 'axios';
import { LoginPayloadType } from '../../types/login/login-payload.type';
import { LoginResponseType } from '../../types/login/login-response.type';
import { RegisterPayloadType } from '../../types/register/register-payload.type';
import { RegisterResponseType } from '../../types/register/register-response.type';
import { UserType } from '../../types/user/user.type';
import { SuccessType } from '../../types/common/success.type';

export const login = async (
  data: LoginPayloadType,
): Promise<LoginResponseType> => {
  const httpClient = new HttpService();
  const path = httpClient.url.build('/auth/login');
  const response: AxiosResponse = await httpClient.post(path, data, {});
  return response.data;
};

export const logout = async (): Promise<SuccessType> => {
  const httpClient = new HttpService();
  const path = httpClient.url.build('/auth/logout');
  const response: AxiosResponse = await httpClient.get(path, {});
  return response.data;
};

export const register = async (
  data: RegisterPayloadType,
): Promise<RegisterResponseType> => {
  const httpClient = new HttpService();
  const path = httpClient.url.build('/auth/register');
  const response: AxiosResponse = await httpClient.post(path, data, {});
  return response.data;
};

export const checkSession = async (): Promise<UserType> => {
  const httpClient = new HttpService();
  const path = httpClient.url.build('/auth/check-session');
  const response: AxiosResponse = await httpClient.post(path, {}, {});
  return response.data;
};
