export class User {
  constructor(private _id?: number, private _name?: string, private _email?: string, private _isAuthenticated?: boolean) {}

  public get id (): number {
    return this._id;
  }

  public get name (): string {
    return this._name;
  }

  public get email (): string {
    return this._email;
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

  isAuthenticated() {
    return this._isAuthenticated === true;
  }
}
