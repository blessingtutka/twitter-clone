import {userAvatar,avatar1,avatar2,avatar3,image1,} from './media'
let data = {
    user:{
        username:'John Doe',
        profile:userAvatar,
    },
    media:{
        1:{
            title:{
                author:'CNN',
                details:{
                    nickname:'CNN',
                    time:'7m'
                }
            },
            avatar:avatar1,
            text:`President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.`,
            image:null,
            data:{
                reply:57,
                retweet:144,
                react:184
            }
            
        },
        2:{
            title:{
                author:'The New York Times',
                details:{
                    nickname:'nytimes',
                    time:'2h'
                }
            },
            avatar:avatar2,
            text: `Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land`,
            image:image1,
            data:{
                reply:19,
                retweet:48,
                react:482
            }
            
        },
        3:{
            title:{
                author:'Twitter',
                details:{
                    nickname:'Twitter',
                    time:'Oct 29'
                }
            },
            avatar:avatar3,
            text:`BIG NEWS lol jk still Twitter`,
            image:null,
            data:{
                reply:'6.8k',
                retweet:'36.6k',
                react:'267.1k'
            }
            
        },
        4:{
            title:{
                author:'Twitter',
                details:{
                    nickname:'Twitter',
                    time:'Oct 4'
                }
            },
            avatar:avatar3,
            text:`hello literally everyone`,
            image:null,
            data:{
                reply:'118.7k',
                retweet:'785.4k',
                react:'3.3M'
            }
            
        },
        5:{
            title:{
                author:'Twitter',
                details:{
                    nickname:'Twitter',
                    time:'Oct 4'
                }
            },
            avatar:avatar3,
            text:'hello literally everyone',
            image:image1,
            data:{
                reply:'118.7k',
                retweet:'785.4k',
                react:'3.3M'      
            }
            
        }
    }
}


export default data