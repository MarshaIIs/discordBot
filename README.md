# Installation

1) Install all dependencies with:
    `npm i`

2) Create a .env file in the root directory. This file contains all the environment variables.

3) Create three environment variables in the .env file:
    - **DISCORDJS_BOT_TOKEN** - The Bot Token
    - **WEBHOOK_ID** - For webhooks, required for the _Announce_ command. 
    - **WEBHOOK_TOKEN** - The token for the webhook client.

4) To run, use either:
    `npm run start`
    `npm run dev` 
    in the project directory