import server from './server';

export const postLogin = async (payload) => {
  const res = await server.post(`/login`, payload);
  return res.data.data;
};

export const postUsers = async (payload) => {
  const res = await server.post(`/users`, payload);
  return res.data.data;
};

export const postSendVerificationCode = async (payload) => {
  const res = await server.post(`/sms/send-verification-code`, payload);
  return res.data.data;
};

export const postVerificationCode = async (payload) => {
  const res = await server.post(`/sms/verify`, payload);
  return res.data.data;
};
