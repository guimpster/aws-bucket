const users = {
  mathew: {
    id: 1,
    name: "Mathew",
    role: "admin"
  },
  george: {
    id: 2,
    name: "George",
    role: "editor"
  },
  johnny: {
    id: 3,
    name: "Johnny",
    role: "customer"
  }
}

export const getUser = (req) => {
  const auth = req.get("Authorization")

  return users[auth] === undefined ? null : users[auth]
}