import CatCard from "./CatCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Cats = ({cats, getCats,default_url}) => {
    const paginationHandler = (e) => {
        e.preventDefault();
        const name = e.target.getAttribute('data-name');
        if (name in cats?.metadata?.links) {
            const url = cats.metadata.links[name];
            getCats(url);
        }
    }
    return (
        <article>
            <h2>Cats List {<Link to="/cats/create">Create</Link>}</h2>
            {cats?.data?.length
                ? (
                    <>
                    <table border="1" cellPadding="5" cellSpacing="5">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        cats.data.map((cat, i) =>
                            <CatCard cat={cat} />
                        )
                    }
                        </tbody>
                    </table>
                    {cats?.metadata?.links?.previous ? 
                        <a
                            href="#"
                            data-name="previous"
                            onClick={paginationHandler}
                        > &lsaquo;Previous </a>
                        : ''
                    }
                    {cats?.metadata?.links?.next ? 
                        <a
                            href="#"
                            data-name="next"
                            onClick={paginationHandler}
                        > Next&rsaquo; </a>
                        : ''
                    }
                    </>
                ) : <p>No cats to display</p>
            }
        </article>
    );
};

export default Cats;