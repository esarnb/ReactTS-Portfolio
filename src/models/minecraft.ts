export class ServerInfo {
    "current": {
        "status": string,
        "players": [
            {
                "id": number,
                "name": string
            }
        ],
        "onlinePlayerCount": number
    }
    "info": {
        "memory": string,
        "start_memory": string,
        "port": string,
        "ip": string,
        "world": string,
        "jarfile": string,
        "suspended": string,
        "name": string,
        "id": string,
        "dir": string,
    }
    "usage": {
        "cpu": string,
        "memory": string
    }
}