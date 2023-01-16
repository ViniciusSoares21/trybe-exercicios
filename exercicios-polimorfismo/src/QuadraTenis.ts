import { IAgenda } from "./interfaces/IAgenda";
import { Itenis } from "./interfaces/ITenis";
import normas from "./normas/normasDeUse";
import Quadra from "./Quadra";

class QuadraTenis extends Quadra {
  protected tenisData:Itenis = normas.tenis;

  public reservar<Itenis>(horaReserva: Date): IAgenda<Itenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);

    return {
      protocolo,
      data: horaReserva,
      regras: this.tenisData as unknown as Itenis,
    }
    
  }
}

export default QuadraTenis;