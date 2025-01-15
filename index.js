const OFFER_ENDS_AT = new Date("2025-01-15T19:00:00+05:30");

const OfferTimeShow = () => {
    const CURRENT_DATE_TIME = new Date();

    const timeDifference = OFFER_ENDS_AT - CURRENT_DATE_TIME;
    if (timeDifference > 0) {
        const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
        const daysRemaining = Math.floor(hoursRemaining / 24);

        if (daysRemaining > 0) {
            console.log(`Offer ends in more than ${daysRemaining} days (${hoursRemaining} hours).`);
        } else {
            console.log(`Offer ends in less than 24 hours (${hoursRemaining} hours).`);
        }
    } else {
        console.log("Offer has ended.");
    }
};

OfferTimeShow();
