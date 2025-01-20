export const useProperty = () => {
  const authUsername = {
    type: String,
    description: '用户名',
    required: false,
    default: '19927458531',
  };
  const authPassword = {
    type: String,
    description: '密码',
    required: false,
    default: '123456',
  };

  const getAuthUsernameProperty = () => authUsername;
  const getAuthPasswordProperty = () => authPassword;

  return {
    getAuthUsernameProperty,
    getAuthPasswordProperty,
  };
};
