function withdraw(clients, balances, client, amount) {
    if (!Array.isArray(clients)) return null;
    if (!Array.isArray(balances)) return null;
    for (let index = 0; index < clients.length; index++) {
        if (clients[index] === client) {
            if (balances[index] - amount > 0) {
                balances[index] -= amount;
            } else {
                return -1;
            }
        }

    }
}