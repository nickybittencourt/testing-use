export const testing = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('done')
    }, 5000)
  })

  return {
    test: 'test',
  }
}
