import { Answer, ProductInt, Credentials} from "../interfaces";

const root1: string = "https://fakestoreapi.com/";
const root2: string = "https://dummyjson.com/";


export async function bringCharacters(): Promise<Answer> {
  try {
    const response: any = await fetch(`${root1}products`);

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: Problem encountered retrieving data`
      );
    }

    const rawData: ProductInt[] = await response.json();
    console.log(rawData);
    const data: Answer = {
      message: "Data properly fetched",
      success: true,
      data: rawData,
    };

    return data;
  } catch (error: any) {
    const errorAnswer: Answer = {
      message: error,
      success: false,
      data: []
    };

    return errorAnswer;
  }
}



export async function LoginMe(credentials:Credentials): Promise<Answer> {


let rawData = await fetch(`${root2}auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: credentials.name,
    password: credentials.password,
    expiresInMins: 30, // optional, defaults to 60
  }),
});

let data = await rawData.json();
return data;


}




