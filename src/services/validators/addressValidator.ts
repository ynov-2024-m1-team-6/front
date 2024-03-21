const AddressValidator = {
  isValidAdress: (
    address: string | undefined,
    city: string | undefined,
    zipcode: string | undefined
  ): string | null => {
    if (!address) {
      return "Adresse manquante";
    }
    if (!city) {
      return "Ville manquante";
    }
    if (!zipcode) {
      return "Code postal manquant";
    }
    return null;
  },
};

export default AddressValidator;
