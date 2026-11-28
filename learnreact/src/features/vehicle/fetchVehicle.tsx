import type { Vehicle } from "./Vehicle";

export default async function fetchVehicles(country: string, type: string, page: number): Promise<Vehicle[]> {
    const urls = [
        `https://wtvehiclesapi.duckdns.org/api/vehicles?limit=4&page=${page}&country=${country}&type=${type}&isPremium=false&isPack=false&isSquadronVehicle=false&isOnMarketplace=false&excludeKillstreak=true&excludeEventVehicles=true`,
        `https://wtvehiclesapi.duckdns.org/api/vehicles?limit=2&page=${page}&country=${country}&type=${type}&isPremium=true&isPack=false&isSquadronVehicle=false&isOnMarketplace=false&excludeKillstreak=true&excludeEventVehicles=true`,
        `https://wtvehiclesapi.duckdns.org/api/vehicles?limit=2&page=${page}&country=${country}&type=${type}&isPremium=false&isPack=false&isSquadronVehicle=false&isOnMarketplace=true&excludeKillstreak=true&excludeEventVehicles=true`,
        `https://wtvehiclesapi.duckdns.org/api/vehicles?limit=2&page=${page}&country=${country}&type=${type}&isPremium=true&isPack=true&isSquadronVehicle=false&isOnMarketplace=false&excludeKillstreak=true&excludeEventVehicles=true`,
    ];

    const results = await Promise.all(
        urls.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch vehicles");
            }
            return (await response.json()) as Vehicle[];
        }),
    );

    return results
        .flat()
        .sort((a, b) => a.realistic_br - b.realistic_br);
}