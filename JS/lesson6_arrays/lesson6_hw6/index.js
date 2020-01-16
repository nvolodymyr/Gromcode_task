function withdraw(clients, balances, client, amount) {
    if (!Array.isArray(clients)) return null;
    if (!Array.isArray(balances)) return null;
    for (let index = 0; index < clients.length; index++) {
        if (clients[i] === client) {
            if (balances[i] - amount > 0) {
                balances[i] -= amount;
            } else {
                return -1;
            }
        }

    }
}