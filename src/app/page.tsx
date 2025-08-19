'use client'

import React from 'react';
import {
  SearchstaxWrapper,
  SearchstaxInputWidget,
  SearchstaxResultWidget,
  SearchstaxPaginationWidget,
  SearchstaxOverviewWidget,
  SearchstaxFacetsWidget,
  SearchstaxSortingWidget,
  SearchstaxRelatedSearchesWidget,
  SearchstaxExternalPromotionsWidget,
  SearchstaxAnswerWidget,
} from '@searchstax-inc/searchstudio-ux-react';

// Import CSS
import './style.css';

export default function Home() {
  // Your working config - inline instead of external file
  const searchConfig = {
    language: 'en',
    searchURL: 'https://searchcloud-2-us-east-1.searchstax.com/29847/bryanttestingapplication-4880/emselect',
    suggesterURL: 'https://searchcloud-2-us-east-1.searchstax.com/29847/bryanttestingapplication-4880_suggester/emsuggest',
    trackApiKey: 'Es7QVy5PXoiT23M1Y0OrwMM0AJcDkNg39eJg96o9CuM',
    searchAuth: '4abcbd4a233b958b02340f3c21bd05c6331d2e62',
    authType: 'token' as const,
    analyticsBaseUrl: 'https://analytics-us.searchstax.com',
    questionURL: 'https://search-ai-us.searchstax.com/api/v1/4880/answer/',
    relatedSearchesURL: 'https://app.searchstax.com/api/v1/4880/related-search/',
    relatedSearchesAPIKey: 'f259bba1449c13609cf8c27693c33cebef9c3442',
    model: 'Default',
    router: {
      enabled: true,
    },
  };

  const initialized = (searchstax: any) => {
    console.log('SearchStax initialized successfully!', searchstax);
  };

  const beforeSearch = (props: any) => {
    console.log('Before search:', props);
    return props;
  };

  const afterSearch = (results: any) => {
    console.log('After search:', results);
    console.log('Number of results:', results?.length);
    return results;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Search Your Webflow Content
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <SearchstaxWrapper
          language={searchConfig.language}
          searchURL={searchConfig.searchURL}
          suggesterURL={searchConfig.suggesterURL}
          trackApiKey={searchConfig.trackApiKey}
          searchAuth={searchConfig.searchAuth}
          authType={searchConfig.authType}
          analyticsBaseUrl={searchConfig.analyticsBaseUrl}
          questionURL={searchConfig.questionURL}
          router={searchConfig.router}
          initialized={initialized}
          beforeSearch={beforeSearch}
          afterSearch={afterSearch}
        >
          <div className="searchstax-page-layout-container">
            {/* Search Input */}
            <SearchstaxInputWidget
              suggestAfterMinChars={3}
            />

            {/* Smart Answers */}
            <SearchstaxAnswerWidget
              showShowMoreAfterWordCount={100}
            />

            {/* Search Overview & Sorting */}
            <div className="search-details-container mb-4 flex justify-between items-center">
              <SearchstaxOverviewWidget />
              <SearchstaxSortingWidget />
            </div>

            <div className="searchstax-page-layout-facet-result-container flex gap-8">
              {/* Facets Sidebar */}
              <div className="searchstax-page-layout-facet-container w-64 flex-shrink-0">
                <SearchstaxFacetsWidget
                  facetingType="and"
                  itemsPerPageDesktop={5}
                  itemsPerPageMobile={10}
                />
              </div>

              {/* Results */}
              <div className="searchstax-page-layout-result-container flex-1">
                {/* External Promotions */}
                <SearchstaxExternalPromotionsWidget />

                {/* Search Results */}
                <SearchstaxResultWidget
                  renderMethod="pagination"
                />

                {/* Related Searches */}
                <SearchstaxRelatedSearchesWidget
                  relatedSearchesURL={searchConfig.relatedSearchesURL}
                  relatedSearchesAPIKey={searchConfig.relatedSearchesAPIKey}
                />

                {/* Pagination */}
                <SearchstaxPaginationWidget />
              </div>
            </div>
          </div>
        </SearchstaxWrapper>
      </main>
    </div>
  );
}
