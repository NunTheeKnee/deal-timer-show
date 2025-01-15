const OFFER_ENDS_AT= new Date("2025-01-14 17:00:00 +0530") 
const OfferTimeShow = () => {
    var CURRENT_DATE = new Date().toLocaleDateString();
    var CURRENT_TIME = new Date().toLocaleTimeString();
    var OFFER_ENDS_AT_DATE = OFFER_ENDS_AT.toLocaleDateString();
    if (OFFER_ENDS_AT_DATE > CURRENT_DATE)
        console.log("Offer ends in more than 24 hours")
    else if(OFFER_ENDS_AT_DATE == CURRENT_DATE)
        console.log("Offer ends in less than 24 hours")
    else
        console.log("Offer has ended")
}
OfferTimeShow()
