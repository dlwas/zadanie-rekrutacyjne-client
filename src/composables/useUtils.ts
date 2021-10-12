export const doError = (err: string) => {
  throw new Error(err)
}

export const focusById = (element: string, mode: string): void => {
  const modes = ['focus', 'unfocus']
  if (element && mode) {
    if (modes.includes(mode)) {
      const elm = document.getElementById(element)
      if (elm) {
        if (mode === 'focus') elm.focus()
        if (mode === 'unfocus') elm.blur()
      } else {
        doError('Element not found, provide a real id name')
      }
    } else {
      doError(`Invalid "mode" name, expect: ${modes}`)
    }
  } else {
    doError(
      `Expect: "element": string, "mode": string , got: "element":${typeof element}, "mode":${typeof mode}`
    )
  }
}