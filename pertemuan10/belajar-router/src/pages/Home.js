import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState({data: []});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async(searchQuery) => {
            try {
                setLoading(true);
                const res = await axios.get(
                    "https://api.artic.edu/api/v1/artworks/search?q=" + searchQuery
                );
                setData(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch");
                setLoading(false);
            }
        };
        if (error) {
            return <h1>{error}</h1>
        }
        const handleSubmit = (event) => {
            event.preventDefault();
            navigate(`/${query}`);
        };

        return (
            <div>
                <h1>Home</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Type here to search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    ></input>
                    <input type="submit" value="Search"></input>
                </form>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        {data.data.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                        </div>
                        ))}
                    </div>
                )}
            </div>
        );
            
    }, [id]);
}