import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import config from "config";

const DISCORD_CONFIG = config.get('DISCORD');
const bot_token = DISCORD_CONFIG.BOT_TOKEN;
const error_channel = DISCORD_CONFIG.ERROR_CHANNEL_ID;
const sql_log_channel = DISCORD_CONFIG.SQL_LOG_CHANNEL_ID
const etc_log_channel = DISCORD_CONFIG.ETC_LOG_CHANNEL_ID


const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});


// Log in and handle errors
//check if not logged in
if (!client.isReady()) {
  console.log("Trying to login discord bot ....")
  client.login(bot_token).catch((err) => {
    console.error('Error logging in:', err);
  });
}

client.once('ready', () => {
  console.log('Bot is ready!');
});

const sendErrorLog = async (message) => {
  try {
    // Ensure the client is ready
    if (!client.isReady()) {
      console.error('Client is not ready. Please wait for the ready event.');
      return;
    }

    // Fetch the channel
    const channel = await client.channels.fetch(error_channel);
    if (channel && channel.isTextBased()) {
      await channel.send(message);
    }
  } catch (err) {
    console.error('Error sending message:', err);
  }
};

const sendSqlLog = async (message) => {
  try {
    // Ensure the client is ready
    if (!client.isReady()) {
      console.error('Client is not ready. Please wait for the ready event.');
      return;
    }

    // Fetch the channel
    const channel = await client.channels.fetch(sql_log_channel);
    if (channel && channel.isTextBased()) {
      await channel.send(message);
    }
  } catch (err) {
    console.error('Error sending message:', err);
  }
};


const sendEtcLog = async (message) => {
  try {
    // Ensure the client is ready
    if (!client.isReady()) {
      console.error('Client is not ready. Please wait for the ready event.');
      return;
    }

    // Fetch the channel
    const channel = await client.channels.fetch(etc_log_channel);
    if (channel && channel.isTextBased()) {
      await channel.send(message);
    }
  } catch (err) {
    console.error('Error sending message:', err);
  }
};




export default {
  sendErrorLog,
  sendSqlLog,
  sendEtcLog
}