var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      // route: '/data'
    },
    collectionKey: {
      url: ({key}) => `/collection/${key}`,
      isHref: true,
      route: '/collection/:key'
    },
    collectionSearch: {
      url: ({queryString, basename}) => `${basename ? `/${basename}` : ''}/collection/search`,
      isHref: true,
      route: '/collection/search'
    },
    collectionKeySpecimens: {
      url: ({key}) => `/collection/${key}/specimens`,
      isHref: false,
      route: '/collection/:key/specimens'
    },
    collectionKeyDashboard: {
      url: ({key}) => `/collection/${key}/specimens`,
      isHref: false,
      route: '/collection/:key/dashboard'
    },
  
    institutionKey: {
      url: ({key}) => `/institution/${key}`,
      isHref: true,
      route: '/institution/:key'
    },
    institutionKeySpecimens: {
      url: ({key}) => `/institution/${key}`,
      isHref: false,
      route: '/institution/:key/specimens'
    },
    institutionKeyCollections: {
      url: ({key}) => `/collections`,
      isHref: false,
      route: '/institution/:key/collections'
    },
    institutionSearch: {
      url: ({queryString, basename}) => `${basename ? `/${basename}` : ''}/institution/search`,
      isHref: true,
      route: '/institution/search'
    },

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
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY','DATASET'],
    availableCatalogues: ['OCCURRENCE'],
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
    rootFilter: {
      countriesOfCoverage: "EC",      
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
    publisher: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE']
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
