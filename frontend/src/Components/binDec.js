export function converter(data)
{
    return  toDec(data, 0) +toDec(data, 1)+ toDec(data, 2)+ toDec(data, 3);
}

function toDec(data, client) {

    return parseInt(data.clients[client].state, 10)* (Math.pow(4, client));

}
