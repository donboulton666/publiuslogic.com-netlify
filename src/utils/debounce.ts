export const debounce = function (callback: (arg0: any) => void, wait: number | undefined) {
  let timerId: string | number | NodeJS.Timeout | undefined
  return (...args: any) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      callback(args)
    }, wait)
  }
}
