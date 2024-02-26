type User = {
    name: string;
    age: number;
    isActive: boolean;
};

function createUser(user: User) {}

createUser({ name: "John", age: 30, isActive: true });
export {};
