import SERVER_ROUTE from "../Constants/ApiServerRoutes"

export const route_to_region = (server_route)=>{
    switch (server_route){
        
        case SERVER_ROUTE.PLATFORM.BR1 
          || SERVER_ROUTE.PLATFORM.NA1
          || SERVER_ROUTE.PLATFORM.LA1
          || SERVER_ROUTE.PLATFORM.LA2:
            return SERVER_ROUTE.REGIONAL.AMERICA;
        
        case SERVER_ROUTE.PLATFORM.EUN1
          || SERVER_ROUTE.PLATFORM.EUW1
          || SERVER_ROUTE.PLATFORM.RU:
            return SERVER_ROUTE.REGIONAL.EUROPE;
        
        case SERVER_ROUTE.PLATFORM.JP1
          || SERVER_ROUTE.PLATFORM.KR:
            return SERVER_ROUTE.REGIONAL.ASIA

        case SERVER_ROUTE.PLATFORM.OC1
          || SERVER_ROUTE.PLATFORM.TR1
          || SERVER_ROUTE.PLATFORM.PH2
          || SERVER_ROUTE.PLATFORM.SG2
          || SERVER_ROUTE.PLATFORM.TH2
          || SERVER_ROUTE.PLATFORM.TW2
          || SERVER_ROUTE.PLATFORM.VN2:
            return SERVER_ROUTE.REGIONAL.SEA
        
        default:
            return "Not Available...";
    }
    

}