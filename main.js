import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";
import pkg from "discord-mudlet-map";
const { configure, MapProviders, LocationResolvers } = pkg;

const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds] });

const mapRenderConfiguration = {
  areaName: false,
}

const config = {
  Achaea: {
    locationExtractor: LocationResolvers.plainRegexp("^![Aa]chaea (\\d+)$"),
    provider: MapProviders.retryingDownloader("https://ire-mudlet-mapping.github.io/AchaeaCrowdmap/Map/map", { retries: 5, delay: 10000 }),
    renderFragment: true,
    settings: mapRenderConfiguration,
  },
  Starmourn: {
    locationExtractor: LocationResolvers.plainRegexp("^![Ss]tar(?:mourn)? (\\d+)$"),
    provider: MapProviders.retryingDownloader("https://ire-mudlet-mapping.github.io/StarmournCrowdmap/Map/map", { retries: 5, delay: 10000 }),
    renderFragment: true,
    settings: mapRenderConfiguration,
  },
  Lusternia: {
    locationExtractor: LocationResolvers.plainRegexp("^![Ll]ust(?:y|ernia)? (\\d+)$"),
    provider: MapProviders.retryingDownloader("https://ire-mudlet-mapping.github.io/LusterniaCrowdmap/Map/map", { retries: 5, delay: 10000 }),
    renderFragment: true,
    settings: mapRenderConfiguration,
  },
  Imperian: {
    locationExtractor: LocationResolvers.plainRegexp("^![Ii]mp(?:erian)? (\\d+)$"),
    provider: MapProviders.retryingDownloader("https://ire-mudlet-mapping.github.io/ImperianCrowdmap/Map/map", { retries: 5, delay: 10000 }),
    renderFragment: true,
    settings: mapRenderConfiguration,
  },
  Aetolia: {
    locationExtractor: LocationResolvers.plainRegexp("^![Aa]eto(?:lia)? (\\d+)$"),
    provider: MapProviders.retryingDownloader("https://ire-mudlet-mapping.github.io/AetoliaCrowdmap/Map/map", { retries: 5, delay: 10000 }),
    renderFragment: true,
    settings: mapRenderConfiguration,
  },
};

const configurator = configure(client, config);
setInterval(configurator, 86400000) // fetch new maps every 24 hours

client.login(process.env.BOT_TOKEN);
