import { HTTPBaseService } from "gss-art-common-lib"

class BaseApiService extends HTTPBaseService {
  /**
   * Constructor base de la api de siniestros
   */
  private static classInstance?: BaseApiService

  constructor(controller: string) {
      super("https://jsonplaceholder.typicode.com");
      this.controller = controller;
  }
}

class TestService extends BaseApiService {  
  constructor() {
      super("todos");
      
  }

  async obtenerTareaPorId(id: number) {
    const resp: any = await this.call("GET", `${id}`);
    if (resp) return resp
    return {}
  }
}

export async function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = async (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`

    console.log("hola")
    const service = new TestService();
    const respuesta = await service.obtenerTareaPorId(counter);
    console.log("respuesta", respuesta);

  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}
