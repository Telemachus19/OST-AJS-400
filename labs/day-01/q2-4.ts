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

type agelessUser = Omit<UserDetails, "age">;

const agelessUser: agelessUser = {
  id: 3,
  firstName: "My",
  lastName: "Doe",
  Password: "1234",
};

type readonlyUser = Readonly<Partial<UserDetails>>;

const flexibleUser: readonlyUser = {
  id: 4,
  firstName: "Alex",
};
