import SERVER_ROUTE from "./ApiServerRoutes"

const ROUTE = {
    ACCOUNT: {
        BY_PUUID                            : '/riot/account/v1/accounts/by-puuid/',
        BY_GAME_NAME_AND_TAGLINE            : '/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}',
        // SHARD_BY_GAME_AND_PUUID          : '/riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid}'
    },

    CHAMPION: {
        FREE_WEEK                           : '/lol/platform/v3/champion-rotations'
    },

    CHAMPION_MAESTRY: {
        BY_SUMMONER_ID                      : '/lol/champion-mastery/v4/champion-masteries/by-summoner/',
        TOTAL_PLAYER_MAESTRY_BY_SUMMONER_ID : '/lol/champion-mastery/v4/scores/by-summoner/',
        // BY_SUMMONER_ID_AND_CHAMPION_ID   : '/lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}/by-champion/{championId}',
        TOP_MAESTRY_BY_SUMMONER_ID       : '/lol/champion-mastery/v4/champion-masteries/by-summoner/',
    },

    CHALLENGES: {
        CONFIG                              : '/lol/challenges/v1/challenges/config',
        PERCENTILES                         : '/lol/challenges/v1/challenges/percentiles',
        PLAYER_DATA_BY_PUUID                : '/lol/challenges/v1/player-data/'
        // CONFIG_BY_CHALLENGE_ID           : '/lol/challenges/v1/challenges/{challengeId}/config',
        // LEADERBOARDS_BY_CHALLENGE_ID_AND_LEVEL: '/lol/challenges/v1/challenges/{challengeId}/leaderboards/by-level/{level}',
        // PERCENTILES_BY_CHALLENGE_ID      : '/lol/challenges/v1/challenges/{challengeId}/percentiles',
    },

    CLASH: {
        TOURNMENTS                          : '/lol/clash/v1/tournaments',
        BY_SUMMONER_ID                      : '/lol/clash/v1/players/by-summoner/',
        TEAMS_BY_TEAM_ID                    : '/lol/clash/v1/teams/',
        TEAM_BY_TEAM_ID                     : '/lol/clash/v1/tournaments/by-team/',
        BY_TOURNMENT_ID                     : '/lol/clash/v1/tournaments/'
    },
    RANKED: {
        CHALLENGER_BY_QUEUE                 : '/lol/league/v4/challengerleagues/by-queue/',
        GRANDMESTER_BY_QUEUE                : '/lol/league/v4/grandmasterleagues/by-queue/',
        MASTERLEAGUE_BY_QUEUE               : '/lol/league/v4/masterleagues/by-queue/',
        BY_QUEUE_TIER_AND_DIVISION          : '/lol/league/v4/entries/',
        BY_SUMMONER_ID                      : '/lol/league/v4/entries/by-summoner/',
        LEAGUE_BY_LEAGUE_ID                 : '/lol/league/v4/leagues/'
    },
    MATCH: {
        BY_MATCH_ID                         : '/lol/match/v5/matches/',
        BY_PUUID                          : '/lol/match/v5/matches/by-puuid/',
        // TIMELINE_BY_MATCH_ID             : '/lol/match/v5/matches/{matchId}/timeline'
    },
    SPECTATOR: {
        BY_SUMMONER_ID                      : '/lol/spectator/v4/active-games/by-summoner/',
        FEATURED_GAME                       : '/lol/spectator/v4/featured-games'
    },
    SUMMONER: {
        BY_NAME                             : '/lol/summoner/v4/summoners/by-name/'     ,
        BY_ACCOUNT_ID                       : '/lol/summoner/v4/summoners/by-account/'  ,
        BY_PUUID                            : '/lol/summoner/v4/summoners/by-puuid/'    ,
        BY_SUMMONER_ID                      : '/lol/summoner/v4/summoners/'
    },
    STATUS: {
        STATUS                              : '/lol/status/v4/platform-data' 
    }
}
export default ROUTE