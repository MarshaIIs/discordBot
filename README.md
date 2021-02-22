# Here be dragons...
Alot of the code is very... interresting
It is slowly being cleaned up, but there are certain commands that are just plain AIDS to look at, and its gonna take a few hours to simplify, clean and add comments to them.
I'll do it eventually (read: never), but I prioritize commands that *work* over efficient commands that took alot of thought and planning
Most efficiency comes with general experience anyway. Its easy to read a book and go "huh yeah that makes sense", but using it in practice is a matter of remembering and applying

# Installation
1) Install all dependencies with:
    `npm i`

2) Create a .env file in the root directory. This file contains all the environment variables.

3) Create four environment variables in the .env file:
    - **DISCORDJS_BOT_TOKEN** - The Bot Token
    - **WEBHOOK_ID** - For webhooks, required for the _Announce_ command. 
    - **WEBHOOK_TOKEN** - The token for the webhook client.
    - **PREFIX** - Prefix used by the bot
    - **w2gKey** - The Watch2Gether key, used when generating Watch2Gether rooms.

4) To run, use either:
    `npm run start`
    `npm run dev` 
    in the project directory
