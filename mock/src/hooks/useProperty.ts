export const useProperty = () => {
  const authPhone = {
    type: String,
    description: '电话号码',
    required: false,
    default: '19927458531',
  }
  const authPassword = {
    type: String,
    description: '密码',
    required: false,
    default: '123456',
  }

  const getAuthPhoneProperty = () => authPhone
  const getAuthPasswordProperty = () => authPassword

  return {
    getAuthPhoneProperty,
    getAuthPasswordProperty
  }
}
