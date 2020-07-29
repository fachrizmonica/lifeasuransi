import Link from 'next/link';

export default function Menu() {
    return (
        <div>
                <ul>
                    <li>
                    <Link href="/ica"><a><h4>Life Asuransi</h4></a></Link>
                    </li>
                    <li>
                    <Link href="/tentang"><a><h4>Tentang Kami</h4></a></Link>
                    </li>
                </ul>
        </div>
    );
}