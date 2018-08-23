const resolvers = {
  Query: {
    frontPage: () => [
      { name: "orange", count: 10 },
      { name: "apple", count: 1 }
    ],
    fruits: () => [
      { name: "lemon", count: 2 }
    ]
  }
};

export default resolvers;
