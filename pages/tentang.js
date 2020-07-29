import Head from 'next/head'
import Menu from '../components/menu';

export default function Tentang() {
    return (
        <div>
            <Head>
                <title>Tentang Kami</title>
            </Head>
            <Menu />
                <div>
                    <h2>Tentang Kami</h2>
                    <h4>Alamat      : Jl. Raya Kabat, Banyuwangi<br/>
                        No.Hp       : 081230132481<br/>
                        Instagram   : @lifeasurasi.id<br/>
                        Buka Mulai Pukul 08.00 s/d 15.00
                    </h4>

                </div>
        </div>
    );
}
       