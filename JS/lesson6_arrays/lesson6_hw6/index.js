let withdraw = (clients, balances, client, amount) => {
    if (!Array.isArray(clients) || !Array.isArray(balances)) return null;
    let index = clients.indexOf(client);
    return balances[index] - amount >= 0 ? balances[index] -= amount : -1;
}
