import { 
    NavigationHelpers,
    EventMapBase,
    RouteProp,
  } from '@react-navigation/core/src/types';
  
  type AnyParamList = Record<string, object | undefined>;
  export type Navigation<
    RouteName extends string = string,
    ParamList extends AnyParamList = AnyParamList,
    EventMap extends EventMapBase = {},
  > = {
    route: RouteProp<ParamList, RouteName>;
    navigation: NavigationHelpers<ParamList>;
  };