import dotenv from "dotenv";
dotenv.config();

import { Client, Intents } from "discord.js";
import pkg from "discord-mudlet-map";
const {configure, MapProviders, LocationResolvers } = pkg;

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });

let config = {
  Achaea: { locationExtractor: LocationResolvers.plainRegexp("^![Aa]chaea (\\d+)$"), provider: MapProviders.retryingDownloader("https://ire-mudlet-mapping.github.io/AchaeaCrowdmap/Map/map", { retries: 5, delay : 10000 }) },
  Starmourn: { locationExtractor: LocationResolvers.plainRegexp("^![Ss]tar(?:mourn)? (\\d+)$"), provider: MapProviders.retryingDownloader("https://ire-mudlet-mapping.github.io/StarmournCrowdmap/Map/map", { retries: 5, delay : 10000 }) },
  Lusternia: { locationExtractor: LocationResolvers.plainRegexp("^![Ll]ust(?:y|ernia)? (\\d+)$"), provider: MapProviders.retryingDownloader("https://ire-mudlet-mapping.github.io/LusterniaCrowdmap/Map/map", { retries: 5, delay : 10000 }) },
};

configure(client, config);

client.login(process.env.BOT_TOKEN);