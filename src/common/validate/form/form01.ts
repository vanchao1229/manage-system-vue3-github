import { authorValidate, TAuthor01Result } from '@/common/validate/author'

export const form01Validate = (that: Record<string, unknown>): TAuthor01Result => {
  const formModel = that.getFormItem as Record<string, string>

  const userNameValidate = authorValidate.userName(formModel?.uname)
  const emailValidate = authorValidate.email(formModel?.email)
  const partValidate = authorValidate.department(formModel?.partId)
  const titleValidate = authorValidate.title(formModel?.titleId)

  if (!userNameValidate.result) {
    that.userNameTipContent = userNameValidate.msg
    that.showUserNameTip = userNameValidate.result
    return { result: false, msg: userNameValidate.msg }
  }

  that.userNameTipContent = '\xa0'
  that.showUserNameValidateTip = false

  if (!emailValidate.result) {
    that.emailTipContent = emailValidate.msg
    that.showEmailTip = emailValidate.result
    return { result: false, msg: emailValidate.msg }
  }

  that.emailTipContent = '\xa0'
  that.showEmailTip = false

  if (!partValidate.result) {
    that.partTipContent = partValidate.msg
    that.showPartTip = partValidate.result
    return { result: false, msg: partValidate.msg }
  }

  that.partTipContent = '\xa0'
  that.showPartTip = false

  if (!titleValidate.result) {
    that.titleTipContent = titleValidate.msg
    that.showTitleTip = titleValidate.result
    return { result: false, msg: titleValidate.msg }
  }

  that.titleTipContent = '\xa0'
  that.showTitleTip = false

  return { result: true, msg: 'validate success' }
}
