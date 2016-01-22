export interface Myra {
  id: number;
  name: string;
  power: string;
  alterEgo: string;
}

export class Myra {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
