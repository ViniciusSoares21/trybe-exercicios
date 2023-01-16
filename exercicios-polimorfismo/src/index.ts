import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";


const clube = new Clube();
const quadra = new QuadraFutebol();

clube.adicionarQuadra(quadra);

const data = new Date('2019/12/06')
const reservarQuadraFutebol = clube
    .buscarQuadra<QuadraFutebol>(0) 
    .reservar(data); 
    console.log(reservarQuadraFutebol);;

const quadraTenis = new QuadraTenis();
clube.adicionarQuadra(quadraTenis);

const reservarQuadraTenis = clube.buscarQuadra<QuadraTenis>(1).reservar(data);
console.log(reservarQuadraTenis);