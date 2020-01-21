let sortContacts = (contasts, triger = true) => {
    if (!Array.isArray(contasts)) return null;
    const result = contasts.sort((a, b) => {
        if (triger) {
            return a.name.localeCompare(b.name)
        } else {
            return b.name.localeCompare(a.name)

        }
    })
    return result;
}