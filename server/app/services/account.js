import Account from 'models/Account'

export const list = async () => {
  return await Account.find().lean().exec()
}

export const create = async (info) => {
  // TODO generate randomize password
  // TODO send password via email

  const { email } = info
  const password = '123456'

  return await new Account({
    email,
    password
  }).save()
}
