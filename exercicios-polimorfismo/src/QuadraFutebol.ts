import { IAgenda } from "./interfaces/IAgenda";
import { IFutebol } from "./interfaces/IFutebol";
import normas from "./normas/normasDeUse"
import Quadra from "./Quadra";

class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;

  reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);

    return {
      protocolo,
      data: horaReserva,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}

export default QuadraFutebol;