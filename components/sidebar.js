import Link from 'next/link';
import AmpImage from './amp-image';

export default function AmpSidebar() {
  return (
    <amp-sidebar
      id="sidebar"
      className="sidenav mega-menu-responsive"
      layout="nodisplay"
      side="left"
      on="sidebarOpen:AMP.setState({sidebarVisible: true}); sidebarClose:AMP.setState({sidebarVisible: false})"
      next-page-hide
    >
      <div className="menu-header-cont">
        <div className="cc-menu-desktop">
          <div className="menu-cont m-c">
            <div className="buttons">
              <div className="input">
                <div className="placeholder">
                  <span>Buscar</span> <i className="fal fa-search" />
                </div>
                <input type="search" className="search" name="search" />
              </div>
            </div>

            <amp-accordion>
              <section className="m-s menu-section cmp-main-menu-tablet">
                <header>
                  <span className="title-option">
                    Secciones <i className="icon fal fa-chevron-up" />
                  </span>
                </header>

                <ul>
                  <li>
                    <a href="/politica/">Política</a>
                  </li>
                  <li>
                    <a href="/sociedad/">Sociedad</a>
                  </li>
                  <li>
                    <a href="/economia/">Economía</a>
                  </li>
                  <li>
                    <a href="/internacional/">Internacional - The Guardian</a>
                  </li>
                  <li>
                    <a href="/cultura/">Cultura</a>
                  </li>
                  <li>
                    <a href="/tecnologia/">Tecnología</a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/desalambre/">Desalambre</a>
                  </li>
                  <li>
                    <a href="/nidos/">Nidos</a>
                  </li>
                  <li>
                    <a href="/ballenablanca/">Ballena Blanca</a>
                  </li>
                  <li>
                    <a href="/viajes/">Viajes</a>
                  </li>
                  <li>
                    <a href="/motor/">Motor</a>
                  </li>
                  <li>
                    <a href="/consumoclaro/">Consumo Claro</a>
                  </li>
                  <li>
                    <a href="http://vertele.eldiario.es/?_ga=2.34920739.34742473.1585677945-1283203043.1585677945">
                      Vertele
                    </a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/edcreativo/blog/">
                      elDiario Brands
                    </a>

                    <ul>
                      <li>
                        <a
                          href="https://www.eldiario.es/edcreativo/diario-salud/"
                          title="Noticias de Salud"
                        >
                          Salud
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.eldiario.es/edcreativo/reciclandoadiario/"
                          title="Noticias de Reciclaje"
                        >
                          Reciclaje
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog/uah-ciencia-y-cultura-al-servicio-de-la-sociedad/"
                          title="Noticias de Formación"
                        >
                          Formación
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="m-s menu-section cmp-main-menu-tablet">
                <header>
                  <span className="title-option">
                    Ediciones locales <i className="icon fal fa-chevron-up"></i>
                  </span>
                </header>

                <ul>
                  <li>
                    <a href="/andalucia/">Andalucía</a>

                    <ul>
                      <li>
                        <a
                          href="https://cordopolis.eldiario.es/"
                          title="Noticias de Cordópolis"
                        >
                          Cordópolis
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/aragon/">Aragón</a>
                  </li>
                  <li>
                    <a href="/canariasahora/">Canarias</a>
                  </li>
                  <li>
                    <a href="/cantabria/">Cantabria</a>
                  </li>
                  <li>
                    <a href="/castilla-la-mancha/">Castilla-La Mancha</a>
                  </li>
                  <li>
                    <a href="/castilla-y-leon/">Castilla y León</a>
                  </li>
                  <li>
                    <a href="/catalunya/">Catalunya</a>
                  </li>
                  <li>
                    <a href="/comunitat-valenciana/">Comunitat Valenciana</a>
                  </li>
                  <li>
                    <a href="/euskadi/">Euskadi</a>
                  </li>
                  <li>
                    <a href="/extremadura/">Extremadura</a>
                  </li>
                  <li>
                    <a href="/galicia/">Galicia</a>
                  </li>
                  <li>
                    <a href="/madrid/">Madrid</a>

                    <ul>
                      <li>
                        <a
                          href="/madrid/somos/chamberi/"
                          title="Noticias de Somos Chamberí"
                        >
                          Somos Chamberí
                        </a>
                      </li>
                      <li>
                        <a
                          href="/madrid/somos/chueca/"
                          title="Noticias de Somos Chueca"
                        >
                          Somos Chueca
                        </a>
                      </li>
                      <li>
                        <a
                          href="/madrid/somos/malasana/"
                          title="Noticias de Somos Malasaña"
                        >
                          Somos Malasaña
                        </a>
                      </li>
                      <li>
                        <a
                          href="/madrid/somos/tetuan/"
                          title="Noticias de Somos Tetuán"
                        >
                          Somos Tetuán
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/murcia/">Murcia</a>
                  </li>
                  <li>
                    <a href="/navarra/">Navarra</a>
                  </li>
                </ul>
              </section>

              <section className="m-s menu-section cmp-main-menu-tablet">
                <header>
                  <span className="title-option">
                    Opinión y blogs <i className="icon fal fa-chevron-up" />
                  </span>
                </header>

                <ul>
                  <li>
                    <a href="/opinion/zona-critica/">Zona Crítica</a>
                  </li>
                  <li>
                    <a href="/escolar">Escolar.net</a>
                  </li>
                  <li>
                    <a href="/opinion/tribuna-abierta/">Tribuna abierta</a>
                  </li>
                  <li>
                    <a href="/piedrasdepapel">Piedras de papel</a>
                  </li>
                  <li>
                    <a href="/blog/al-dia/">Al día</a>
                  </li>
                  <li>
                    <a href="http://www.guerraeterna.com/">Guerra eterna</a>
                  </li>
                  <li>
                    <a href="/contracorriente">Pérez Royo</a>
                  </li>
                  <li>
                    <a href="/micromachismos">Micromachismos</a>
                  </li>
                  <li>
                    <a href="/arsenioescolar">Crónicas del poder</a>
                  </li>
                  <li>
                    <a href="/contrapoder">Contrapoder</a>
                  </li>
                  <li>
                    <a href="/caballodenietzsche">El caballo de Nietzsche</a>
                  </li>
                  <li>
                    <a href="/cienciacritica">Ciencia Crítica</a>
                  </li>
                  <li>
                    <a href="/tumejoryo/">Tu mejor yo</a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/comoyporque/">
                      Cómo y por qué
                    </a>
                  </li>
                  <li>
                    <a href="/retrones">Retrones</a>
                  </li>
                  <li>
                    <a href="/interferencias">Interferencias</a>
                  </li>
                  <li>
                    <a href="/ultima-llamada">Última llamada</a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/blogs">Más blogs</a>
                  </li>
                </ul>
              </section>

              <section className="m-s menu-section cmp-main-menu-tablet">
                <header>
                  <span className="title-option">
                    Navegamos con <i className="icon fal fa-chevron-up"></i>
                  </span>
                </header>

                <ul>
                  <li>
                    <a href="http://www.yorokobu.es/">Yorokobu</a>
                  </li>
                  <li>
                    <a href="/carnecruda/">Carne cruda</a>
                  </li>
                  <li>
                    <a href="https://www.quo.es/">Quo</a>
                  </li>
                  <li>
                    <a href="https://elordenmundial.com/">El orden mundial</a>
                  </li>
                  <li>
                    <a href="http://kiosko.net/">Kiosko.net</a>
                  </li>
                  <li>
                    <a href="http://catalunyaplural.cat/es/">
                      Catalunya plural
                    </a>
                  </li>
                  <li>
                    <a href="http://eldiariodelaeducacion.com/">
                      El diario de la educación
                    </a>
                  </li>
                  <li>
                    <a href="http://graffica.info/">Gràffica</a>
                  </li>
                  <li>
                    <a href="https://www.esglobal.org/">esglobal</a>
                  </li>
                  <li>
                    <a href="http://www.eldiario.es/campobase/">Campobase</a>
                  </li>
                </ul>
              </section>
            </amp-accordion>

            <amp-accordion>
              <section className="m-s menu-section cmp-focos-elDiario">
                <header>
                  <span className="title-option">
                    Los Focos de elDiario.es{' '}
                    <i className="icon fal fa-chevron-up" />
                  </span>
                </header>

                <ul>
                  <li>
                    <a href="https://eldiario.es/focos/igualdad/">Igualdad</a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/crisis-climatica/">
                      Crisis climática
                    </a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/derechos_y_libertades/">
                      Derechos y libertades
                    </a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/memoria_historica">
                      Memoria histórica
                    </a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/vigilancia_del_poder/">
                      Vigilancia del poder
                    </a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/etica-digital/">
                      Ética digital
                    </a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/salud-publica/">
                      Salud pública
                    </a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/educacion/">Educación</a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/lgtbi/">LGTBI</a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/movilidad/">Movilidad</a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/racismo/">Racismo</a>
                  </li>
                  <li>
                    <a href="https://eldiario.es/focos/precariedad/">
                      Precariedad
                    </a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/focos/vivienda">
                      Vivienda
                    </a>
                  </li>
                </ul>
              </section>
            </amp-accordion>

            <amp-accordion>
              <section className="m-s menu-section cmp-focos-elDiario-partner">
                <header>
                  <span className="title-option">
                    Socios y socias <i className="icon fal fa-chevron-up" />
                  </span>
                </header>

                <ul>
                  <li>
                    <a href="https://www.eldiario.es/ventajas">Tus ventajas</a>
                  </li>
                  <li>
                    <a href="https://usuarios.eldiario.es/perfil/cuota">
                      Aumenta tu cuota
                    </a>
                  </li>
                  <li>
                    <a href="http://www.eldiario.es/socios">
                      El blog de los socios y socias
                    </a>
                  </li>
                  <li>
                    <a href="https://usuarios.eldiario.es/regala-periodismo">
                      Regala elDiario.es
                    </a>
                  </li>
                  <li>
                    <a href="http://www.eldiario.es/ayuda">
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/opinionsocios/">
                      La opinión de los socios y las socias
                    </a>
                  </li>
                </ul>
              </section>
            </amp-accordion>

            <amp-accordion>
              <section className="m-s menu-section cmp-todo-elDiario-menu">
                <header>
                  <span className="title-option">
                    Todo sobre El Diario{' '}
                    <i className="icon fal fa-chevron-up"></i>
                  </span>
                </header>

                <ul>
                  <li>
                    <a href="https://www.eldiario.es/que-es-eldiario-es/">
                      Qué es
                    </a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/el-equipo/">El equipo</a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/contacto/">Contacto</a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/danos-una-pista/">
                      Danos una pista
                    </a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/responde">
                      elDiario responde
                    </a>
                  </li>
                  <li>
                    <a href="https://www.eldiario.es/preguntas-y-respuestas/">
                      FAQs
                    </a>
                  </li>
                </ul>
              </section>
            </amp-accordion>

            <Link href="/">
              <a className="logotipo--bottom">
                <AmpImage
                  alt="El Diario"
                  src="/assets/img/svg/logos/eldiario-logo-2c.svg"
                  width="167"
                  height="23"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </amp-sidebar>
  );
}
