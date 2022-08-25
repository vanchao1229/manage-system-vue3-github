interface IAuthor01Result {
  result: boolean,
  msg: string
}

export type TAuthor01Result = IAuthor01Result

const userName = (val: string): TAuthor01Result => {
  if (val === undefined || val.trim().length === 0) {
    return {
      result: false,
      msg: 'user name can not be empty'
    }
  }
  return { result: true, msg: 'success' }
}

const email = (val: string): TAuthor01Result => {
  if (val === undefined || val.trim().length === 0) {
    return {
      result: false,
      msg: 'email can not be empty'
    }
  }

  const re = /\S+@\S+\.\S+/
  if (!re.test(val)) {
    return {
      result: false,
      msg: 'email format not validate'
    }
  }

  return { result: true, msg: 'success' }
}

const department = (val: string): TAuthor01Result => {
  if (val === undefined || val.trim().length === 0) {
    return {
      result: false,
      msg: 'department opition can not be empty'
    }
  }
  return { result: true, msg: 'success' }
}

const title = (val: string): TAuthor01Result => {
  if (val === undefined || val.trim().length === 0) {
    return {
      result: false,
      msg: 'title opition can not be empty'
    }
  }
  return { result: true, msg: 'success' }
}

export const authorValidate = {
  userName: userName,
  email: email,
  department: department,
  title: title
}
