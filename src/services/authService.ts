const login = async (
  mail: string,
  password: string
): Promise<string | null> => {
  try {
    const response = await fetch(
      "https://api-mystore.onrender.com/auth/login",
      {
        method: "POST",
        body: JSON.stringify({ mail, password }),
      }
    );
    const responseJson = await response.json();
    if (!response.ok) {
      return responseJson.message;
    }
    localStorage.setItem("token", responseJson.data);
    return null;
  } catch (error) {
    throw error;
  }
};

const register = async (
  mail: string,
  password: string,
  firstname: string,
  lastname: string,
  address: string,
  city: string,
  zipCode: string,
  phoneNumber: string
): Promise<string | null> => {
  try {
    const response = await fetch(
      "https://api-mystore.onrender.com/auth/register",
      {
        method: "POST",
        body: JSON.stringify({
          mail,
          password,
          firstname,
          lastname,
          address,
          city,
          zipCode,
          phoneNumber,
        }),
      }
    );
    const responseJson = await response.json();
    if (!response.ok) {
      return responseJson.message;
    }
    localStorage.setItem("token", responseJson.data);
    return null;
  } catch (error) {
    throw error;
  }
};

const AuthService = { login, register };
export default AuthService;
