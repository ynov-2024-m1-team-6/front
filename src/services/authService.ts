export interface Log {
  mail: string;
  password: string;
}

const login = async (
  mail: string,
  password: string
): Promise<string | null> => {
  try {
    const payload: Log = { mail, password };
    console.log(payload);

    const response = await fetch(
      "https://api-mystore.onrender.com/auth/login",
      {
        method: "POST",
        body: JSON.stringify(payload),
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
  firstName: string,
  name: string,
  adress: string,
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
          firstName,
          name,
          adress,
          city,
          zipCode,
          phoneNumber,
        }),
      }
    );

    const responseJson = await response.json();
    console.log(responseJson);
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
