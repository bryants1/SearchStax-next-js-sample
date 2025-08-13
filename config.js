const initConfig = {
  // Your actual SearchStax configuration from dashboard
  acceleratorSample: {
    language: "en",
    searchURL: "https://searchcloud-2-us-east-1.searchstax.com/29847/bryanttestingapplication-4880/emselect",
    suggesterURL: "https://searchcloud-2-us-east-1.searchstax.com/29847/bryanttestingapplication-4880_suggester/emsuggest",
    searchAuth: "4abcbd4a233b958b02340f3c21bd05c6331d2e62", // Your Read Only token
    trackApiKey: "Es7QVy5PXoiT23M1Y0OrwMM0AJcDkNg39eJg96o9CuM", // Your correct tracking key
    authType: "token",
    relatedSearchesURL: "https://app.searchstax.com/api/v1/4880/related-search/", // Your related searches endpoint
    relatedSearchesAPIKey: "f259bba1449c13609cf8c27693c33cebef9c3442", // Your discovery key
    analyticsBaseUrl: "https://analytics-us.searchstax.com", // Your analytics URL
    questionURL: "https://search-ai-us.searchstax.com/api/v1/4880/answer/", // Your Smart Answers endpoint
    popularSearchesURL: "https://app.searchstax.com/api/v1/4880/popular-search/", // Your popular searches endpoint
    model: "Default",
    appId: "4880", // Your app ID
  },
  // Update other configs to use your account too
  acceleratorRelatedSearchSample: {
    relatedSearchesURL: "https://app.searchstax.com/api/v1/4880/related-search/",
    relatedSearchesAPIKey: "f259bba1449c13609cf8c27693c33cebef9c3442",
    model: "Default",
  },
  jobSearchSample: {
    language: "en",
    searchURL: "https://searchcloud-2-us-east-1.searchstax.com/29847/bryanttestingapplication-4880/emselect",
    suggesterURL: "https://searchcloud-2-us-east-1.searchstax.com/29847/bryanttestingapplication-4880_suggester/emsuggest",
    searchAuth: "4abcbd4a233b958b02340f3c21bd05c6331d2e62",
    trackApiKey: "Es7QVy5PXoiT23M1Y0OrwMM0AJcDkNg39eJg96o9CuM",
    authType: "token",
    analyticsBaseUrl: "https://analytics-us.searchstax.com",
    model: "Default",
  },
  jobSearchRelatedSearchSample: {
    relatedSearchesURL: "https://app.searchstax.com/api/v1/4880/related-search/",
    relatedSearchesAPIKey: "f259bba1449c13609cf8c27693c33cebef9c3442",
    analyticsBaseUrl: "https://analytics-us.searchstax.com",
    model: "Default",
  },
};

const renderConfig = {
  inputWidget: {
    suggestAfterMinChars: 3, // Start showing suggestions after 3 characters
  },
  facetsWidget: {
    itemsPerPageDesktop: 5,
    itemsPerPageMobile: 99,
    facetingType: "and", // "and" | "or" | "showUnavailable" | "tabs"
  },
  resultsWidget: {
    renderMethod: "pagination", //'infiniteScroll' or 'pagination'
  },
  locationWidget: {
    locationDecode: (term) => {
      return new Promise((resolve) => {
        // You can add Google Geocoding API here if needed for location search
        // For now, return a simple response
        resolve({
          address: term,
          lat: undefined,
          lon: undefined,
          error: false,
        });
      });
    },
    locationDecodeCoordinatesToAddress: (lat, lon) => {
      return new Promise((resolve) => {
        // Add reverse geocoding if needed
        resolve({
          address: `${lat}, ${lon}`,
          lat: lat,
          lon: lon,
          error: false,
        });
      });
    },
    locationSearchEnabled: false, // Disable for now unless you need location search
    locationValuesOverride: {
      locationDistanceEnabled: false,
      filterValues: ["any", "1000"],
      filterUnit: "miles",
      locationFilterDefaultValue: "any"
    },
  },
};

// Export the configuration that will be used in page.tsx
export const config = initConfig.acceleratorSample;
export { renderConfig };
