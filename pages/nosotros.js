import Layout from '../components/Layout'
import Image from 'next/image'
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen nosotros' />

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ut neque id vehicula.
                            Integer ultricies nisl magna, vitae interdum velit posuere non. Ut pulvinar ac diam eu luctus.
                            Duis pulvinar purus sit amet elit ullamcorper dictum. Ut imperdiet finibus elit molestie
                            consequat. Donec venenatis volutpat lacus, ac aliquet sapien laoreet et. Sed id massa nunc.
                            Nullam porta turpis ex, quis dapibus mauris tempus id. Integer faucibus mi non semper
                            dignissim.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ut neque id vehicula.
                            Integer ultricies nisl magna, vitae interdum velit posuere non. Ut pulvinar ac diam eu luctus.
                            Duis pulvinar purus sit amet elit ullamcorper dictum. Ut imperdiet finibus elit molestie
                            consequat. Donec venenatis volutpat lacus, ac aliquet sapien laoreet et. Sed id massa nunc.
                            Nullam porta turpis ex, quis dapibus mauris tempus id. Integer faucibus mi non semper
                            dignissim.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros