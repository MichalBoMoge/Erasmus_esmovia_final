
export interface Answer {
    message: string,
    success: boolean,
    data: ProductInt[] | Credentials
}



export interface CInputInt {
  type : string
  name : string
  design: string
  placeholder : string
  onChange : (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Credentials{
  name:string,
  password:string
}

export interface CredentialsErrors{
  nameError:string,
  passwordError:string
}

export interface ProductInt {
    id: number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating: Rate

}


export interface PCardInt{
  product : ProductInt,
}


export interface CCardInt{
    product : ProductInt,
    selectProduct : () => void
}


export interface Rate{
    rate:number,
    count:number
}

export interface SurferInt{
  path:string,
  destiny:string
}