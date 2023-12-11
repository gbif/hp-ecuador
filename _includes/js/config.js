var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    alwaysUseHrefs: true,
    enabledRoutes: ['occurrenceSearch', 'institutionKey', 'institutionSearch', 'publisherSearch', 'publisherKey', 'collectionKey', 'collectionSearch', 'datasetKey', 'datasetSearch', 'literatureSearch'],
  },
  occurrence: {
    mapSettings: {
      lat: -0.7798655946554618,
      lng: -85.58298870182435,
      zoom: 4.8646
    },
    rootPredicate: {
      "type": "or",
      "predicates": [
        {
          "key": "publishingCountry",
          "type": "equals",
          "value": "EC"
        },
        {
          "type": "and",
          "predicates": [
            {
              "key": "country",
              "type": "equals",
              "value": "EC"
            },
            {
              "key": "notIssues",
              "type": "equals",
              "value": "COUNTRY_COORDINATE_MISMATCH"
            }
          ]
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince', 'publisherKey', 'year', 'basisOfRecord', 'datasetName'],
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS', 'CLUSTERS'],
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE'],
    excludedFilters: ['publishingCountryCode']
  },
  dataset: {
    availableCatalogues: ['DATASET', 'PUBLISHER'],
    rootFilter: {publishingCountry: 'EC'},
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode']
  },
  literature: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE'],
     rootFilter: {countriesOfCoverage: ['EC']}
  },
  collection: {
    availableCatalogues: ['COLLECTION', 'INSTITUTION'],
    excludedFilters: ['countrySingleGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: "EC",
      active: true
    }
  },
  institution: {
    availableCatalogues: ['COLLECTION', 'INSTITUTION'],
    excludedFilters: ['countrySingleGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: "EC",
      active: true
    },
  },
  publisher: {
      rootFilter: {
        country: 'EC'
      },
      excludedFilters: ['countrySingle'],
  },
  mapSettings: {
      enabled: true,
      lat: -1.4481247373907848,
      lng: -81.95287504757923,
      zoom: 5.654
    },
  },
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }
