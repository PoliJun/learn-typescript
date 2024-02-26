type cardDate = {
    month: number;
    year: number;
};
type cardNumber = {
    cardNumber: number;
};

type cardDetails = cardDate & cardNumber;

// createUser(myUser);
export {};
