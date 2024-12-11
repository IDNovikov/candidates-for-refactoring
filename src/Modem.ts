// можно добавить I для обозначения интерфейса
interface IModem {
  dial: (phoneNumber: string) => boolean;
  disconnect: () => boolean;
  send: (c: string) => boolean;
  recv: () => string;
  getConnectedPhoneNumber: () => string;
}
