const pay = async (
  mail: string,
  id: number[],
  address: {
    address: string | undefined;
    zipCode: string | undefined;
    city: string | undefined;
  }
): Promise<string | null> => {
  try {
    const body = JSON.stringify({
      email: mail,
      id,
      address,
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}stripe/session`,
      {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseJson = await response.json();
    if (!response.ok) {
      return responseJson.message;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

const PaymentService = { pay };
export default PaymentService;
