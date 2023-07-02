export const formHasError = (errors) => {
    return Object.keys(errors).some((key) => errors[key] !== '')
}
