/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosInstance from "@/core/services/ApiService.ts";
import type  { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {
  /**
   * show loading status
   */
  loading?: boolean;
  /**
   * display error message
   */
  showError?: boolean;
  /**
   * data security, extended fields are encrypted using the specified algorithm
   */
  security?: Record<string, 'md5' | 'sha1' | 'aes' | 'des'>;
  /**
   * indicates whether Authorization credentials are required for the request
   * @default true
   */
  withAuthorization?: boolean;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
  /** only in axios interceptor config*/
  loading: boolean;
  showError: boolean;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
    serviceOptions.axios = axiosInstance;
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = {
    loading: serviceOptions.loading,
    showError: serviceOptions.showError,
    ...options,
    method,
    url
  };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = import.meta.env.VITE_API;

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class CustomerLoginAPI {
  /**
   *
   */
  static signOrRegisterPhoneNumber(
    params: {
      /** requestBody */
      body?: SignOrRegisterPhoneNumberDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/sign-in-or-register-phone-number';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static verifyOtp(
    params: {
      /** requestBody */
      body?: VerifyOTPDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseVerifyOTPDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/verify-otp';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateProfile(
    params: {
      /** requestBody */
      body?: UpdateCustomerDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Customer> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/update-profile';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getMe(options: IRequestOptions = {}): Promise<Customer> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/get-me';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static refreshToken(options: IRequestOptions = {}): Promise<ResponseVerifyOTPDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/refresh-token';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
}

export class BranchAPI {
  /**
   *
   */
  static branchControllerGetAllBranches(options: IRequestOptions = {}): Promise<BranchDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/branches';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
}

export class DepartInfoAPI {
  /**
   *
   */
  static getDestinations(
    params: {
      /**  */
      search?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DestinationDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/destination';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { search: params['search'] };

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getDepartureBus(
    params: {
      /**  */
      from: number;
      /**  */
      to: number;
      /**  */
      date: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseDepartureBusDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/get-departure-bus';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { from: params['from'], to: params['to'], date: params['date'] };

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static viewBusDetail(
    params: {
      /**  */
      from: number;
      /**  */
      to: number;
      /**  */
      date: string;
      /**  */
      tripId: number;
      /**  */
      timeId: number;
      /**  */
      fleetTypeId: number;
      /**  */
      fleetCode: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseBusDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/view-bus-detail';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        from: params['from'],
        to: params['to'],
        date: params['date'],
        tripId: params['tripId'],
        timeId: params['timeId'],
        fleetTypeId: params['fleetTypeId'],
        fleetCode: params['fleetCode']
      };

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static viewOriginDestinationDetail(
    params: {
      /**  */
      from: number;
      /**  */
      to: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseViewOriginAndDestination> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/view-origin-destination-detail';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { from: params['from'], to: params['to'] };

      axios(configs, resolve, reject);
    });
  }
}

export class BookingBusAPI {
  /**
   *
   */
  static updateTicketInfo(
    params: {
      /** requestBody */
      body?: UpdateTicketInfoDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/update-ticket-info';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static selectSeats(
    params: {
      /** requestBody */
      body?: RequestSelectSeatDTO;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseBusDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/select-seat';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static cancel(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/cancel-ticket';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static reviewTicket(options: IRequestOptions = {}): Promise<ReviewTicketDTO> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/review-ticket';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static confirmTicket(options: IRequestOptions = {}): Promise<ResponseGeneratePaymentLinkDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/confirm';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static confirmTicketMobile(
    params: {
      /** requestBody */
      body?: ConfirmTicketMobileDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseGeneratePaymentLinkDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/confirm-mobile';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static callBackPayment(
    params: {
      /**  */
      data: string;
      /** requestBody */
      body?: OrderInfoDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/payment-callback/{data}';
      url = url.replace('{data}', params['data'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updatePassengerInfo(
    params: {
      /** requestBody */
      body?: RequestSelectSeatDTO;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseBusDetail> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/update-passenger-info';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static paymentVerify(
    params: {
      /** requestBody */
      body?: RequestPaymentVerifyDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/cart/payment-verify';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class MyBookingAPI {
  /**
   *
   */
  static getBookingHistory(
    params: {
      /**  */
      limit: number;
      /**  */
      offset: number;
      /**  */
      type: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseBookingHistory> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/booking/get-booking-history';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { limit: params['limit'], offset: params['offset'], type: params['type'] };

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getBookingDetail(
    params: {
      /**  */
      ticketUuid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BookingHistoryDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/booking/get-booking-detail/{ticket_uuid}';
      url = url.replace('{ticket_uuid}', params['ticketUuid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
}

export class KessPaymentServiceAPI {
  /**
   *
   */
  static paymentControllerGetBakongMembers(options: IRequestOptions = {}): Promise<ResponseBaKongMemberDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/get-bakong-members';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static paymentControllerGetPaymentMethods(options: IRequestOptions = {}): Promise<ResponsePaymentMethodDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/get-payment-methods';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static paymentControllerNativePay(
    params: {
      /** requestBody */
      body?: RequestNativePayDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseGeneratePaymentLinkDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/native-pay';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static paymentControllerCreateOrder(
    params: {
      /** requestBody */
      body?: RequestCreateOrderDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseGeneratePaymentLinkDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/create-order';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static paymentControllerRefund(options: IRequestOptions = {}): Promise<ResponseRefundDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/refund';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static paymentControllerCloseOrder(options: IRequestOptions = {}): Promise<ResponseCloseOrderDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/close-order';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static paymentControllerQueryOrder(
    params: {
      /**  */
      outTradeNo: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseQueryOrderDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/query-order/{out_trade_no}';
      url = url.replace('{out_trade_no}', params['outTradeNo'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
}

export class ConstantsAPI {
  /**
   *
   */
  static constantsControllerGetNationals(options: IRequestOptions = {}): Promise<ConstantNationDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/constants/get-nationals';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static constantsControllerGetGender(options: IRequestOptions = {}): Promise<ConstantGenderDto[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/constants/get-genders';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
}

export class GazelleManagementAPI {
  /**
   *
   */
  static provincesControllerCreate(
    params: {
      /** requestBody */
      body?: CreateProvinceDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Province> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/provinces';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static provincesControllerFindAll(
    params: {
      /**  */
      limit: number;
      /**  */
      page: number;
      /**  */
      order?: string;
      /**  */
      orderDirect?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseProvincesDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/provinces';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        limit: params['limit'],
        page: params['page'],
        order: params['order'],
        orderDirect: params['orderDirect']
      };

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static provincesControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProvinceDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/provinces/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static provincesControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateProvinceDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProvinceDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/provinces/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static provincesControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/provinces/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static districtsControllerCreate(
    params: {
      /** requestBody */
      body?: CreateDistrictDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<District> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/districts';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static districtsControllerFindAll(
    params: {
      /**  */
      limit: number;
      /**  */
      page: number;
      /**  */
      order?: string;
      /**  */
      orderDirect?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseDistricts> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/districts';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        limit: params['limit'],
        page: params['page'],
        order: params['order'],
        orderDirect: params['orderDirect']
      };

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static districtsControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseDistrictDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/districts/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static districtsControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateDistrictDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseDistrictDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/districts/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static districtsControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/districts/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static communesControllerCreate(
    params: {
      /** requestBody */
      body?: CreateCommuneDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Commune> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/communes';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static communesControllerFindAll(
    params: {
      /**  */
      limit: number;
      /**  */
      page: number;
      /**  */
      order?: string;
      /**  */
      orderDirect?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseCommunes> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/communes';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        limit: params['limit'],
        page: params['page'],
        order: params['order'],
        orderDirect: params['orderDirect']
      };

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static communesControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseCommuneDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/communes/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static communesControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateCommuneDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseCommuneDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/communes/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static communesControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/communes/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static villagesControllerCreate(
    params: {
      /** requestBody */
      body?: CreateVillageDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Village> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/villages';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static villagesControllerFindAll(
    params: {
      /**  */
      limit: number;
      /**  */
      page: number;
      /**  */
      order?: string;
      /**  */
      orderDirect?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseVillages> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/villages';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        limit: params['limit'],
        page: params['page'],
        order: params['order'],
        orderDirect: params['orderDirect']
      };

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static villagesControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Village> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/villages/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static villagesControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateVillageDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResponseVillageDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/villages/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      /** 适配移动开发（iOS13 等版本），只有 POST、PUT 等请求允许带body */

      

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static villagesControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v1/villages/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      axios(configs, resolve, reject);
    });
  }
}

export interface SignOrRegisterPhoneNumberDto {
  /**  */
  phoneNumber: string;
}

export interface VerifyOTPDto {
  /**  */
  phoneNumber: string;

  /**  */
  otpCode: string;
}

export interface ResponseVerifyOTPDto {
  /**  */
  access_token: string;

  /**  */
  expire: string;

  /**  */
  expire_in: number;

  /**  */
  refresh_token: string;

  /**  */
  isNewCustomer: boolean;
}

export interface UpdateCustomerDto {
  /**  */
  email: string;

  /**  */
  gender: string;

  /**  */
  firstName: string;

  /**  */
  lastName: string;

  /**  */
  neckName: string;

  /**  */
  image: string;
}

export interface Customer {
  /**  */
  email: string;

  /**  */
  gender: string;

  /**  */
  firstName: string;

  /**  */
  lastName: string;

  /**  */
  image: string;

  /**  */
  phoneNumber: string;
}

export interface BranchDto {
  /**  */
  region_id?: number;

  /**  */
  code: string;

  /**  */
  type?: string;

  /**  */
  name: string;

  /**  */
  khmer_name: string;

  /**  */
  address_code: string;

  /**  */
  country_id: number;

  /**  */
  house_num: string;

  /**  */
  longitudes: number;

  /**  */
  latitude: number;

  /**  */
  registered_date: Date;

  /**  */
  status: number;

  /**  */
  description?: string;

  /**  */
  memo?: string;

  /**  */
  image?: string;

  /**  */
  created_by?: number;

  /**  */
  parent_id?: number;

  /**  */
  street?: string;

  /**  */
  contact_number?: string;

  /**  */
  address_full?: string;
}

export interface DestinationDto {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  code: string;

  /**  */
  active?: boolean;

  /**  */
  branchId?: number;

  /**  */
  province_id?: number;
}

export interface EstimateTimeDto {
  /**  */
  dest_id: string;

  /**  */
  hour: string;

  /**  */
  time: string;
}

export interface TimeDetailDto {
  /**  */
  leaving_time: string;

  /**  */
  arrive_time: string;

  /**  */
  estimate_time: EstimateTimeDto[];

  /**  */
  duration: number;

  /**  */
  over_departure: number;
}

export interface ResponseDepartureBusDto {
  /**  */
  trip_id: number;

  /**  */
  time_id: number;

  /**  */
  time: string;

  /**  */
  fleet_type_id: number;

  /**  */
  fleet_name: string;

  /**  */
  price: number;

  /**  */
  type: string;

  /**  */
  origin_id: number;

  /**  */
  origin: string;

  /**  */
  destination_id: number;

  /**  */
  destination: string;

  /**  */
  total: number;

  /**  */
  status: string;

  /**  */
  seat_sold: number;

  /**  */
  fleet_number: number;

  /**  */
  fleet_code: number;

  /**  */
  duration: string;

  /**  */
  image: string;

  /**  */
  current_time: string;

  /**  */
  time_detail: TimeDetailDto;

  /**  */
  availableSeat: number;
}

export interface SeatColumnDto {
  /**  */
  column: number;

  /**  */
  key: string;

  /**  */
  seatNumber: string;

  /**  */
  status: EnumSeatColumnDtoStatus;
}

export interface DeckerLayoutDto {
  /**  */
  seatRow: number;

  /**  */
  seatColumns: SeatColumnDto[];
}

export interface DeckerLayoutsDataDto {
  /**  */
  decker: string;

  /**  */
  deckerLayout: DeckerLayoutDto[];
}

export interface FleetLayout {
  /**  */
  totalDecker: number;

  /**  */
  deckerLayoutsData: DeckerLayoutsDataDto[];
}

export interface ResponseBusDetail {
  /**  */
  arriveTime: string;

  /**  */
  availableSeat: number;

  /**  */
  departureOver: number;

  /**  */
  departureTime: string;

  /**  */
  description: string;

  /**  */
  destination: string;

  /**  */
  estimateTime: EstimateTimeDto[];

  /**  */
  fleetLayout: FleetLayout;

  /**  */
  name: string;

  /**  */
  origin: string;

  /**  */
  route: string[];

  /**  */
  seatTotal: number;

  /**  */
  sellingPrice: string;

  /**  */
  travelHour: number;

  /**  */
  fleet_number: number;

  /**  */
  fleet_type_id: number;

  /**  */
  from_id: number;

  /**  */
  request_change_ref_id: number;

  /**  */
  time_id: number;

  /**  */
  to_id: number;

  /**  */
  image: string;

  /**  */
  trip_date: string;

  /**  */
  trip_id: number;

  /**  */
  hasSeatsSelected: boolean;

  /**  */
  seat_layout_id: number;
}

export interface ResponseDestinationDto {
  /**  */
  branchCode?: string;

  /**  */
  branchName?: string;

  /**  */
  branchNameEn?: string;

  /**  */
  latitude?: number;

  /**  */
  longitude?: number;

  /**  */
  address?: string;

  /**  */
  contact_number: string;

  /**  */
  street?: string;

  /**  */
  house_num?: string;

  /**  */
  branchId?: number;
}

export interface ResponseViewOriginAndDestination {
  /**  */
  origin: ResponseDestinationDto;

  /**  */
  destination: ResponseDestinationDto;
}

export interface UpdateTicketInfoDto {
  /**  */
  booker_name?: string;

  /**  */
  pickup_note?: string;

  /**  */
  pickup_address?: string;

  /**  */
  memo?: string;

  /**  */
  contact_number?: string;
}

export interface RequestSelectSeatDTO {
  /**  */
  trip_id: number;

  /**  */
  from_id: number;

  /**  */
  to_id: number;

  /**  */
  fleet_type_id: number;

  /**  */
  seat_layout_id: number;

  /**  */
  time_id: number;

  /**  */
  trip_date: string;

  /**  */
  fleet_number: number;

  /**  */
  request_change_ref_id?: number;

  /**  */
  type: number;

  /**  */
  value: string;

  /**  */
  key: string;

  /**  */
  passenger_name?: string;

  /**  */
  gender?: string;

  /**  */
  passenger_nation_id?: number;

  /**  */
  image: string;
}

export interface BookerInfoDto {
  /**  */
  primary_contact_number: string;

  /**  */
  secondary_contact_number?: string;

  /**  */
  memo?: string;

  /**  */
  booker_name?: string;

  /**  */
  pickup_address?: string;

  /**  */
  pickup_note?: string;
}

export interface ReviewTicketDTO {
  /**  */
  bookerInfoDto: BookerInfoDto;

  /**  */
  bus: ResponseBusDetail;

  /**  */
  passengerInfo: RequestSelectSeatDTO[];

  /**  */
  paymentLink: string;

  /**  */
  expiredAsSeconds: number;
}

export interface SellerDto {
  /**  */
  code: string;

  /**  */
  display_name: string;
}

export interface PaymentDetailDto {
  /**  */
  id: number;

  /**  */
  payer_id: number;

  /**  */
  method_id: number;

  /**  */
  tokenize_id: object;

  /**  */
  method_desc: string;

  /**  */
  holder_name: object;

  /**  */
  card_info: object;

  /**  */
  bank_info: object;

  /**  */
  created_at: string;

  /**  */
  payment_method_bic: string;
}

export interface Cardinfo {}

export interface Wechatalipayinfo {}

export interface OrderInfoDto {
  /**  */
  token: string;

  /**  */
  out_trade_no: string;

  /**  */
  transaction_id: string;

  /**  */
  body: string;

  /**  */
  total_amount: number;

  /**  */
  currency: string;

  /**  */
  status: string;

  /**  */
  paid_at: Date;

  /**  */
  settled_at: Date;

  /**  */
  settlement_date: Date;

  /**  */
  expired_at: Date;

  /**  */
  created_at: Date;

  /**  */
  detail: string[];

  /**  */
  seller: SellerDto;

  /**  */
  payment_detail: PaymentDetailDto;

  /**  */
  error_logs: string[];

  /**  */
  version: string;

  /**  */
  meta: object;

  /**  */
  tip: object;

  /**  */
  bank_ref: object;

  /**  */
  deeplink: string;

  /**  */
  card_info: Cardinfo;

  /**  */
  wechat_alipay_info: Wechatalipayinfo;

  /**  */
  queue_number: string;

  /**  */
  payment_link: string;

  /**  */
  dynamic_code_link: string;
}

export interface ResponseGeneratePaymentLinkDto {
  /**  */
  success: boolean;

  /**  */
  data: OrderInfoDto;

  /**  */
  sign: string;

  /**  */
  sign_type: string;
}

export interface ConfirmTicketMobileDto {
  /**  */
  service_code: string;
}

export interface RequestPaymentVerifyDto {
  /**  */
  invoiceNo: string;

  /**  */
  transactionId: string;

  /**  */
  status: string;

  /**  */
  message: string;
}

export interface DestinationDetailDto {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  branch: ResponseDestinationDto;
}

export interface BusDto {
  /**  */
  id: number;

  /**  */
  image: string;

  /**  */
  fleet_number: number;

  /**  */
  fleet_name: string;
}

export interface PassengerDto {
  /**  */
  seat_id: number;

  /**  */
  seat_number: string;

  /**  */
  passenger_name?: string;

  /**  */
  gender?: string;

  /**  */
  national?: string;

  /**  */
  national_id?: number;

  /**  */
  contact?: string;

  /**  */
  amount: number;
}

export interface BookingHistoryDto {
  /**  */
  id: number;

  /**  */
  ticket_uid: string;

  /**  */
  total: number;

  /**  */
  trip_date: string;

  /**  */
  payment: string;

  /**  */
  status: string;

  /**  */
  leaving_time: string;

  /**  */
  arrive_time: string;

  /**  */
  remaining_date: string;

  /**  */
  booker_name?: string;

  /**  */
  phone_number: string;

  /**  */
  booked_at: string;

  /**  */
  destination_info: DestinationDetailDto;

  /**  */
  origin_info: DestinationDetailDto;

  /**  */
  bus_info: BusDto;

  /**  */
  passenger_info: PassengerDto[];
}

export interface ResponseBookingHistory {
  /**  */
  totalRecords: number;

  /**  */
  data: BookingHistoryDto[];

  /**  */
  limit: number;

  /**  */
  nextPage: number;

  /**  */
  currentPage: number;
}

export interface BaKongMemberDto {
  /**  */
  id: number;

  /**  */
  name: string;

  /**  */
  branch_code: string;

  /**  */
  bic: string;

  /**  */
  crypto_key_id: object;

  /**  */
  owner_address_fk_country: object;

  /**  */
  owner_address_city: string;

  /**  */
  owner_address_region: string;

  /**  */
  owner_address_postalcode: string;

  /**  */
  owner_address_line1: string;

  /**  */
  owner_address_line2: object;

  /**  */
  status: number;

  /**  */
  logo: string;

  /**  */
  position: object;

  /**  */
  payin_rate: number;

  /**  */
  payout_rate: number;

  /**  */
  is_display_on_app: number;
}

export interface ResponseBaKongMemberDto {
  /**  */
  success: boolean;

  /**  */
  data: BaKongMemberDto[];

  /**  */
  sign: string;

  /**  */
  sign_type: string;
}

export interface StorelinkDto {
  /**  */
  ios: string;

  /**  */
  android: string;
}

export interface PaymentMethodDto {
  /**  */
  id: number;

  /**  */
  title: string;

  /**  */
  img_url: string;

  /**  */
  bic: string;

  /**  */
  storelink: StorelinkDto;
}

export interface ResponsePaymentMethodDto {
  /**  */
  success: boolean;

  /**  */
  data: PaymentMethodDto;

  /**  */
  sign: string;

  /**  */
  sign_type: string;
}

export interface RequestNativePayDto {
  /**  */
  seller_code: string;

  /**  */
  out_trade_no: string;

  /**  */
  body: string;

  /**  */
  total_amount: number;

  /**  */
  service_code: string;
}

export interface RequestCreateOrderDto {
  /**  */
  out_trade_no: string;

  /**  */
  body: string;

  /**  */
  total_amount: number;

  /**  */
  notify_url: string;

  /**  */
  redirect_url: string;
}

export interface ResponseRefundDto {
  /**  */
  success: boolean;

  /**  */
  data: OrderInfoDto;

  /**  */
  sign: string;

  /**  */
  sign_type: string;
}

export interface ResponseCloseOrderDto {
  /**  */
  success: boolean;

  /**  */
  data: OrderInfoDto;

  /**  */
  sign: string;

  /**  */
  sign_type: string;
}

export interface ResponseQueryOrderDto {
  /**  */
  success: boolean;

  /**  */
  data: OrderInfoDto;

  /**  */
  sign: string;

  /**  */
  sign_type: string;
}

export interface ConstantNationDto {
  /**  */
  value: number;

  /**  */
  textEn: string;

  /**  */
  textKm: string;
}

export interface ConstantGenderDto {
  /**  */
  value: string;

  /**  */
  textEn: string;

  /**  */
  textKm: string;
}

export interface CreateProvinceDto {
  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface Province {}

export interface ResponseProvinceDto {
  /**  */
  id: number;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface ResponseProvincesDto {
  /**  */
  totalRecords: number;

  /**  */
  data: ResponseProvinceDto[];

  /**  */
  limit: number;

  /**  */
  nextPage: number;

  /**  */
  currentPage: number;
}

export interface District {}

export interface ProvinceDto {
  /**  */
  id: number;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;

  /**  */
  districts: District[];
}

export interface UpdateProvinceDto {
  /**  */
  code?: string;

  /**  */
  nameEn?: string;

  /**  */
  nameKh?: string;
}

export interface CreateDistrictDto {
  /**  */
  province_code: number;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface ResponseDistrictDto {
  /**  */
  id: number;

  /**  */
  province_code: number;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface ResponseDistricts {
  /**  */
  totalRecords: number;

  /**  */
  data: ResponseDistrictDto[];

  /**  */
  limit: number;

  /**  */
  nextPage: number;

  /**  */
  currentPage: number;
}

export interface UpdateDistrictDto {
  /**  */
  province_code: number;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface CreateCommuneDto {
  /**  */
  districtId: number;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface Commune {}

export interface ResponseCommuneDto {
  /**  */
  id: number;

  /**  */
  district_code: string;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface ResponseCommunes {
  /**  */
  totalRecords: number;

  /**  */
  data: ResponseCommuneDto[];

  /**  */
  limit: number;

  /**  */
  nextPage: number;

  /**  */
  currentPage: number;
}

export interface UpdateCommuneDto {
  /**  */
  districtId?: number;

  /**  */
  code?: string;

  /**  */
  nameEn?: string;

  /**  */
  nameKh?: string;
}

export interface CreateVillageDto {
  /**  */
  communeId: number;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface Village {}

export interface ResponseVillageDto {
  /**  */
  id: number;

  /**  */
  communeId: number;

  /**  */
  code: string;

  /**  */
  nameEn: string;

  /**  */
  nameKh: string;
}

export interface ResponseVillages {
  /**  */
  totalRecords: number;

  /**  */
  data: ResponseVillageDto[];

  /**  */
  limit: number;

  /**  */
  nextPage: number;

  /**  */
  currentPage: number;
}

export interface UpdateVillageDto {
  /**  */
  communeId?: number;

  /**  */
  code?: string;

  /**  */
  nameEn?: string;

  /**  */
  nameKh?: string;
}
export enum EnumSeatColumnDtoStatus {
  'free' = 'free',
  'booked' = 'booked',
  'hide' = 'hide',
  'on_select' = 'on_select',
  'occupied' = 'occupied'
}
