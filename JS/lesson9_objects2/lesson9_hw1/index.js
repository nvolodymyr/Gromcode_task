let getCustomersList = customObj => {
    return Object.entries(customObj).map(elem => ({ id: elem[0], ...customObj[elem[0]] })).sort((a, b) => a.age - b.age);
}
const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },

};
console.log(getCustomersList(customers));