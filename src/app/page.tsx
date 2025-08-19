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
      {/* Authentic Fitchburg State University Header */}
      <header style={{
        backgroundColor: '#00563F',
        padding: '0',
        position: 'relative',
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px'
        }}>
          {/* FSU Logo and Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* FSU Logo with distinctive bars */}
            <div style={{
              width: '32px',
              height: '32px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                width: '4px',
                height: '24px',
                backgroundColor: '#E9AF2F',
                left: '4px',
                top: '4px',
                borderRadius: '1px'
              }}></div>
              <div style={{
                position: 'absolute',
                width: '4px',
                height: '18px',
                backgroundColor: '#E9AF2F',
                left: '12px',
                top: '7px',
                borderRadius: '1px'
              }}></div>
              <div style={{
                position: 'absolute',
                width: '4px',
                height: '14px',
                backgroundColor: '#E9AF2F',
                left: '20px',
                top: '9px',
                borderRadius: '1px'
              }}></div>
            </div>
            
            <span style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '18px',
              fontWeight: '700',
              letterSpacing: '0.5px',
              color: 'white',
              textTransform: 'uppercase'
            }}>
              FITCHBURG STATE UNIVERSITY
            </span>
          </div>
          
          {/* Right Side Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* Apply and Give Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a 
                href="https://www.fitchburgstate.edu/admissions-and-aid/apply-fitchburg-state" 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'Arial, sans-serif',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#E9AF2F'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Apply
              </a>
              <span style={{ color: 'white', fontSize: '16px', opacity: 0.7 }}>|</span>
              <a 
                href="https://www.fitchburgstate.edu/about/advancement/make-gift" 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'Arial, sans-serif',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#E9AF2F'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Give
              </a>
            </div>
            
            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Search Button */}
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                aria-label="Search"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Menu Button */}
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s ease',
                  fontFamily: 'Arial, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                aria-label="Menu"
              >
                <span style={{ fontSize: '16px', fontWeight: '500' }}>Menu</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', width: '20px' }}>
                  <span style={{ width: '100%', height: '2px', backgroundColor: 'white', transition: 'all 0.2s ease' }}></span>
                  <span style={{ width: '100%', height: '2px', backgroundColor: 'white', transition: 'all 0.2s ease' }}></span>
                  <span style={{ width: '100%', height: '2px', backgroundColor: 'white', transition: 'all 0.2s ease' }}></span>
                </div>
              </button>
            </div>
          </div>
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
