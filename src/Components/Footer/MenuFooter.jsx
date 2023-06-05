import React from 'react';
import './style.css';
import { SiWhatsapp } from "react-icons/si";
import { SiMaildotru } from "react-icons/si";

const MenuFooter = () => {
    return (
        <div class="footer-top">
            <div>
                <h6 class="footer-title">Nosotros</h6>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Quienes somos</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Nuestro compromiso</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Sucursales</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Ayudanos a mejorar</a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 class="footer-title">Comprar</h6>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Como comprar</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Como pagar</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Promociones</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Envios</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Devolucion</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Ayuda</a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 class="footer-title">Productos</h6>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Almacen</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Frutos secos</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Especias a granel</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Infusiones</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Otros</a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 class="footer-title">Especiales</h6>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Sin TACC</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Sin azucar</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Sin sodio</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Veganos</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Suplementos</a>
                    </li>
                    <li class="footer-list-item">
                        <a href="" class="footer-list-link">Otros</a>
                    </li>
                </ul>
            </div>
            <div>
                <h6 class="footer-title">Contacto</h6>
                <ul class="footer-list">
                    <li class="footer-contacto"><SiWhatsapp/> +5491155555555</li>
                    <li class="footer-contacto"><SiMaildotru/> sldmnt@gmail.com</li>
                    <li class="footer-contacto">Casa Central</li>
                    <li class="footer-contacto">Avenida Jorge Motosierra 1234</li>
                    <li class="footer-contacto">CABA CP 1111</li>
                </ul>
            </div>
        </div>
    );
}

export default MenuFooter;