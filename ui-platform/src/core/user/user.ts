export class User {
  constructor(private _id?: number, private _name?: string, private _email?: string, private _token?: string) {
    if (_token === undefined) {
      this._token = '';
    }
  }

  public get id (): number {
    return this._id;
  }

  public get name (): string {
    return this._name;
  }

  public get email (): string {
    return this._email;
  }

  public get token (): string {
    return this._token;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set email(value: string) {
    this._email = value;
  }

  public set token(value: string) {
    this._token = value;
  }

  isAuthenticated() {
    return this._token !== '';
  }
}
