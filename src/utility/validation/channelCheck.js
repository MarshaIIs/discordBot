class ChannelCheck {
    /* 696122434184544266 = #dungeoneers
    * 751814974355275777 = #dm-campaign
    * 773304694587260958 = #dm-character
    * 748287140550410310 = #dm-private
    * 687306978443132958 = #bot-spam
    * 624299862464135170 = #voicechat
    * 634050395336998933 = #cmd-testing
    */

    default(message) {
        if (message.channel === '687306978443132958' || message.channel === '624299862464135170' || message.channel === '634050395336998933')
            return true;
        else {
                message.delete();
                message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
                    msg.delete({ timeout: 7500 })
                })
                .catch(console.error);
                
                return false;
        }
    }

    dnd(message) {
        if (message.channel === '696122434184544266' || message.channel === '751814974355275777' || message.channel === '773304694587260958' || message.channel === '748287140550410310' 
        || message.channel === '687306978443132958' || message.channel === '624299862464135170' || message.channel === '634050395336998933')
            return true;
        else {
            message.reply('please use a correct channel, such as <#687306978443132958>').then(msg => {
                msg.delete({ timeout: 30000 })
            })
            .catch(console.error);
            
            return false;
        }
    }

    dndDM(message) {   
        if (message.channel === '751814974355275777' || message.channel === '748287140550410310' || message.channel === '634050395336998933')
            return true;
        else {
            message.delete();
            message.reply('please the <#748287140550410310> channel').then(msg => {
                msg.delete({ timeout: 7500 })
            })
            .catch(console.error);
            
            return false;
        }
    }
}

module.exports = ChannelCheck;