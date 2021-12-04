const Footer = () => {
    return (
        <div>
            <footer class="container__footer  py-3 text-justify">
                <div class="container-fluid">	
                <div class= "row ">
                    <ul class="footer__textos col-sm-4 list-unstyled mb-5">
                        <li class="footer__titulo font-weight-bold text-uppercase mb-1">CONTACTO</li>
                        <li class=" font-weight">Tel. (+54 341) 3656888</li>
                        <li class=" font-weight"><img src="media/insta.png"></img>Instagram :<a href="https://www.instagram.com/servicioscerveceros/" >servicioscerveceros</a></li>
                        <li class=" font-weight"><img src="media/mail.png"></img><i class="fas fa-envelope"></i>info@Crowntainer.com.ar</li>
                        <li class=" font-weight"><i><img src="media/map.png"></img></i>Rioja 4620, Rosario, Santa Fe </li>
                        <li class="footer__titulo font-weight-bold text-uppercase mb-1"> SERVICIOS</li>
                        <li class=" font-weight">Enlatado</li>
                        <li class=" font-weight">Pasteurizado</li>
                        <li class=" font-weight">Compra y Venta de cerveza</li>
                        <li class=" font-weight">Diseño y Etiquetado</li>

			</ul>
			<ul class="footer__textos col-sm-4 list-unstyled mb-5 font-weight">
				<li class="footer__titulo font-weight-bold text-uppercase mb-1">NUESTRO COMPROMISO</li>
				<li class=" font-weight">Mantenemos la calidad de tu cerveza</li>
				<li class=" font-weight">Devolucion rapida de barriles</li>
				<li class=" font-weight">Eficiencia de enlatado</li>
				<li class=" font-weight">Pausterizado con garantia</li>
				<li class=" font-weight mb-5">Etiquetas atractivas para la venta</li> 
				<li class="footer__titulo font-weight-bold text-uppercase mb-1"> DATOS DE INTERÉS</li>
				<li class=" font-weight">pedidos@crowntainer.com.ar</li>
				<li class=" font-weight ">empleo@crowntainer.com.ar</li>
				<li class=" font-weight mb-5 ">logistica@crowntainer.com.ar</li>
			</ul>
			<div class="mapouter">
				<div class="gmap_canvas">
					<iframe width="275" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=rioja%204620&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net"></a>
					<a href="https://www.embedgooglemap.net">maps for websites</a>
				</div>
			</div>
			</div>
		</div>
	</footer>
        </div>
    )
}

export default Footer
