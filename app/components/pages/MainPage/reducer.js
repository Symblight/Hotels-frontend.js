import {
  REQUEST_LOAD_HOTELS,
  SUCCESS_LOAD_HOTELS,
  INVALID_LOAD_HOTELS,

  REQUEST_LOAD_LIST_COUNTRIES,
  SUCCESS_LOAD_LIST_COUNTRIES,
  INVALID_LOAD_LIST_COUNTRIES,

  REQUEST_LOAD_LIST_CITIES,
  SUCCESS_LOAD_LIST_CITIES,
  INVALID_LOAD_LIST_CITIES,

  REQUEST_CHANGE_FILTERS,
  SUCCESS_CHANGE_FILTERS,
  INVALID_CHANGE_FILTERS,

  REQUEST_SEARCH,
  SUCCESS_SEARCH,
  INVALID_SEARCH,

  REQUEST_SEARCH_HOTELS,
  SUCCESS_SEARCH_HOTELS,
  INVALID_SEARCH_HOTELS,

  CHANGE_FILTER_COUNTRY,
  CHANGE_FILTER_CITY,
  CHANGE_FILTER_COST,
  CHANGE_SEARCH,
  CHANGE_RATING,
  RESET_FILTERS,
} from '../../../constants'


const defaultFilters = {
  filters: {
    search: '',
    cities: [],
    countries: [],
    searchList: [],
  },
  userFilters: {
    id_country: undefined,
    id_city: undefined,
    rating: 5,
    cost: {
      from: 10,
      before: 999,
    },
  },
}

const initialState = {
  hotels: [],
  filters: {
    search: '',
    cities: [],
    countries: [],
    searchList: [],
  },
  userFilters: {
    id_country: undefined,
    id_city: undefined,
    rating: 5,
    cost: {
      from: 10,
      before: 999,
    },
  },
  didInvalid: false,
  isFetching: false,
}

export const reducerMainPage = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOAD_HOTELS: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_LOAD_HOTELS: {
      return {
        ...state,
        hotels: action.payload,
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_LOAD_HOTELS: {
      return {
        ...state,
        didInvalid: false,
        isFetching: false,
      }
    }
    case REQUEST_LOAD_LIST_COUNTRIES: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_LOAD_LIST_COUNTRIES: {
      return {
        ...state,
        filters: {
          ...state.filters,
          countries: action.payload,
        },
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_LOAD_LIST_COUNTRIES: {
      return {
        ...state,
        didInvalid: false,
        isFetching: false,
      }
    }
    case REQUEST_LOAD_LIST_CITIES: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_LOAD_LIST_CITIES: {
      return {
        ...state,
        filters: {
          ...state.filters,
          cities: action.payload,
        },
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_LOAD_LIST_CITIES: {
      return {
        ...state,
        didInvalid: false,
        isFetching: false,
      }
    }

    case REQUEST_CHANGE_FILTERS: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }
    case SUCCESS_CHANGE_FILTERS: {
      return {
        ...state,
        hotels: action.payload,
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_CHANGE_FILTERS: {
      return {
        ...state,
        didInvalid: false,
        isFetching: false,
      }
    }

    case REQUEST_SEARCH: {
      return {
        ...state,
        didInvalid: false,
        isFetching: false,
      }
    }
    case SUCCESS_SEARCH: {
      return {
        ...state,
        filters: {
          ...state.filters,
          searchList: action.payload,
        },
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_SEARCH: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }

    case REQUEST_SEARCH_HOTELS: {
      return {
        ...state,
        didInvalid: false,
        isFetching: false,
      }
    }
    case SUCCESS_SEARCH_HOTELS: {
      return {
        ...state,
        hotels: action.payload,
        didInvalid: false,
        isFetching: false,
      }
    }
    case INVALID_SEARCH_HOTELS: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      }
    }

    case CHANGE_FILTER_COUNTRY: {
      return {
        ...state,
        userFilters: {
          ...state.userFilters,
          id_country: action.payload,
        },
      }
    }
    case CHANGE_FILTER_CITY: {
      return {
        ...state,
        userFilters: {
          ...state.userFilters,
          id_city: action.payload,
        },
      }
    }
    case CHANGE_FILTER_COST: {
      return {
        ...state,
        userFilters: {
          ...state.userFilters,
          cost: action.payload,
        },
      }
    }

    case CHANGE_SEARCH: {
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      }
    }

    case CHANGE_RATING: {
      return {
        ...state,
        userFilters: {
          ...state.userFilters,
          rating: action.payload,
        },
      }
    }

    case RESET_FILTERS: {
      return {
        ...state,
        ...defaultFilters,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
