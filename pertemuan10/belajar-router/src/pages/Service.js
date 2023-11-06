import { Link, Outlet } from "react-router-dom";

export default function Service() {
    return (
        <div>
            <h2>Layanan Kami</h2>
            <ul>
                <li>
                    <Link to="/service/pengembangan">Pengembangan Aplikasi</Link>
                </li>
                <li>
                    <Link to="/service/desain">Desain Grafis</Link>
                </li>
                <li>
                    <Link to="/service/pemasaran">Pemasaran Digital</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export function Desain() {
    return <h3>Layanan Desain Grafis</h3>;
}

export function Pemasaran() {
    return <h3>Layanan Pemasaran Digital</h3>;
}

export function Pengembangan() {
    return <h3>Layanan Pengembangan Aplikasi</h3>;
}
    