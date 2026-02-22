type UserDetails = {
  id: number;
  firstName: string;
  lastName: string;
  Password: string;
  age: number;
};

type SystemRoles = {
  Admin: UserDetails;
  User: UserDetails;
};

const systemData: SystemRoles = {
  Admin: {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    Password: "1234",
    age: 35,
  },
  User: {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    Password: "12345",
    age: 28,
  }, // DOEs
};

type UserWithoutAge = Omit<UserDetails, "age">;

const agelessUser: UserWithoutAge = {
  id: 3,
  firstName: "My",
  lastName: "Doe",
  Password: "1234",
};

type SecureFlexibleUser = Readonly<Partial<UserDetails>>;

const flexibleUser: SecureFlexibleUser = {
  id: 4,
  firstName: "Alex",
};
