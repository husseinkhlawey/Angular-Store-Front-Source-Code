import {Deserializable} from './deserializable.model';

export class Product implements Deserializable {
  public item: string;
  public link: string;
  public sale: string;
  public featured: string;

  deserialize(input: any): this {
    //assigns input to this object
    return Object.assign(this, input);
  }

  //utility method
  getLink() {
    return this.link;
  }
}
