export interface EbayInterface {
    itemId: string;
    title: string;
    globalId: string;
    primaryCategory: {
        categoryId: string;
        categoryName: string;
    };
    galleryURL: string;
    viewItemURL: string;
    paymentMethod: string;
    autoPay: boolean;
    postalCode: string;
    location: string;
    country: string;
    shippingInfo: {
        shippingServiceCost: number;
        shippingType: string;
        shipToLocations: string;
        expeditedShipping: boolean;
        oneDayShippingAvailable: boolean;
        handlingTime: number;
    };
    sellingStatus: {
        currentPrice: number;
        convertedCurrentPrice: number;
        bidCount: number;
        sellingState: string;
    };
    listingInfo: {
        bestOfferEnabled: boolean;
        buyItNowAvailable: boolean;
        startTime: Date;
        endTime: Date;
        listingType: string;
        gift: boolean;
        watchCount: number;
    };
    returnsAccepted: boolean;
    isMultiVariationListing: boolean;
    topRatedListing: boolean;
}
