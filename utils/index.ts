declare class simpleRedux {
  constructor(args: any);
  getStore(combineInfos: object, extra?: object): any;
  getEpics(): any;
  epicAsync(action: string, payload: object, options: object, store: any): any;
  convey(params: any, store?: any): any;
  conveyAll(arr: string[], store?: any): any;
  conveyPromise(params: string, store?: any): number;
}
