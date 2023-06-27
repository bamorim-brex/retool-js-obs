window.onerror = (event) => {
    console.log(`intercepted error from retool-js-obs: ${event}`)
}
throw new Error('this is a test error')