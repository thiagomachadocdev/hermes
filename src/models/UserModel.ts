import database from '../configs/database'
import bcrypt from 'bcryptjs'

export const createUserModel = ({ name, email, password }: User) => {
  const hashPassword = bcrypt.hashSync(password, 8)

  try {
    return database.user.create({
      data: {
        name,
        email,
        password: hashPassword
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export const readUsersModel = () => {
  try {
    return database.user.findMany()
  } catch (err) {
    console.log(err)
  }
}

export const updateUserModel = (
  id: string,
  { name, email, password }: User
) => {
  try {
    return database.user.update({
      where: {
        id
      },
      data: {
        name,
        email,
        password
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteUserModel = (id: string) => {
  try {
    return database.user.delete({
      where: {
        id
      }
    })
  } catch (err) {
    console.log(err)
  }
}
