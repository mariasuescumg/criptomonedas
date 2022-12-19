import '../styles/Footer.css';// se importan los estilos del componente Footer
import LogoMaria from '../assets/img/LogoMaria.png';// se importa la imagen del logo personal para utilizalo en este componente 

// se declara componente footer y retorna el html que se muestra en el espacio
const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-up">
                <div className="footer-p">
                    <p>DESCARGO DE RESPONSABILIDAD IMPORTANTE: todo el contenido disponible en nuestro sitio web, en los sitios web hipervinculados,
                        y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociados ("Sitio") tienen como único
                        objetivo proporcionarle información general procedente de fuentes externas.</p>
                </div>
                <div className="footer-c">
                    <p>Crypto Stadistics</p>
                    <p>© 2022</p>
                </div>
            </div>
            <div className="footer-down">
                <p>Developed by</p>
                <div>
                    {/** una vez importada la imagen solo se utiliza en el html la variable LogoMaria para definir la imagen es este espacio  */}
                  <img src={LogoMaria} alt="Logo Maria" />
                   
                </div>
            </div>
        </div>
    );
}
export default Footer;
// se exporta el componente footer para poder utilizarlos en otro componente