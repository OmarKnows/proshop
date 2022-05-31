import bcrypt from 'bcryptjs/dist/bcrypt.js'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hesham',
    email: 'Hesham@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sherif',
    email: 'Sherif@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
