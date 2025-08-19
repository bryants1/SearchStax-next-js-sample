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
    
    // Fix for undefined sort issue
    if (props.sort === 'undefined desc' || props.sort === undefined) {
      props.sort = 'score desc'; // Default to relevance sort
    }
    
    return props;
  };

  const afterSearch = (results: any) => {
    console.log('After search:', results);
    console.log('Number of results:', results?.length);
    return results;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Fitchburg State University Header */}
      <header className="fitchburg-header">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* University Logo and Name */}
            <div className="flex items-center gap-4">
              <div className="logo-placeholder">
                FSU
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white mb-0">
                  Fitchburg State University
                </h1>
                <p className="text-sm opacity-90 mb-0" style={{ color: '#E9AF2F' }}>
                  Search University Resources
                </p>
              </div>
            </div>
            
            {/* Optional Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <a 
                href="https://www.fitchburgstate.edu/" 
                className="text-white hover:text-yellow-300 transition-colors duration-200 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                University Home
              </a>
              <a 
                href="https://www.fitchburgstate.edu/academics/" 
                className="text-white hover:text-yellow-300 transition-colors duration-200 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Academics
              </a>
              <a 
                href="https://www.fitchburgstate.edu/admissions/" 
                className="text-white hover:text-yellow-300 transition-colors duration-200 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admissions
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* University Search Information Bar */}
      <div className="bg-gray-50 border-b-2" style={{ borderBottomColor: '#E9AF2F' }}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg 
                className="w-5 h-5" 
                style={{ color: '#00563F' }}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium" style={{ color: '#00563F' }}>
                Search academic programs, faculty, news, and university resources
              </span>
            </div>
            <div className="text-xs text-gray-600 hidden sm:block">
              Powered by SearchStax
            </div>
          </div>
        </div>
      </div>

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
            {/* Search Input with FSU Branding */}
            <div className="mb-6">
              <SearchstaxInputWidget
                suggestAfterMinChars={3}
                placeholder="Search Fitchburg State University..."
              />
            </div>

            {/* Smart Answers */}
            <SearchstaxAnswerWidget
              showShowMoreAfterWordCount={100}
            />

            {/* Search Overview & Sorting */}
            <div className="search-details-container mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <SearchstaxOverviewWidget />
              <SearchstaxSortingWidget />
            </div>

            <div className="searchstax-page-layout-facet-result-container flex flex-col lg:flex-row gap-8">
              {/* Facets Sidebar */}
              <div className="searchstax-page-layout-facet-container w-full lg:w-64 flex-shrink-0">
                <div className="sticky top-4">
                  <div className="bg-white rounded-lg shadow-sm border-2 p-4 mb-4" style={{ borderColor: '#E9AF2F' }}>
                    <h3 className="font-semibold mb-2" style={{ color: '#00563F' }}>
                      Filter Results
                    </h3>
                    <p className="text-sm text-gray-600">
                      Use the filters below to narrow your search results.
                    </p>
                  </div>
                  
                  <SearchstaxFacetsWidget
                    facetingType="and"
                    itemsPerPageDesktop={5}
                    itemsPerPageMobile={10}
                  />
                </div>
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
                <div className="mt-8">
                  <SearchstaxRelatedSearchesWidget
                    relatedSearchesURL={searchConfig.relatedSearchesURL}
                    relatedSearchesAPIKey={searchConfig.relatedSearchesAPIKey}
                  />
                </div>

                {/* Pagination */}
                <SearchstaxPaginationWidget />
              </div>
            </div>
          </div>
        </SearchstaxWrapper>
      </main>

      {/* University Footer */}
      <footer className="footer mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="logo-placeholder">
                FSU
              </div>
              <div>
                <p className="font-semibold mb-1">Fitchburg State University</p>
                <p className="text-sm opacity-90">
                  160 Pearl Street, Fitchburg, MA 01420
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <a 
                href="https://www.fitchburgstate.edu/about/contact-us" 
                className="hover:text-yellow-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
              <a 
                href="https://www.fitchburgstate.edu/about/directory" 
                className="hover:text-yellow-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directory
              </a>
              <a 
                href="https://www.fitchburgstate.edu/campus-life/events" 
                className="hover:text-yellow-300 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Events
              </a>
              <span className="text-xs opacity-75">
                © 2025 Fitchburg State University
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
