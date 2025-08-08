
const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-2 my-2 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src} style={{height:"220px", width:"320px"}}   className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description? description.slice(0, 90):"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis, omnis error placeat repellendus saepe aperiam dolores dolor minima. Repellendus, illum? Molestiae perspiciatis labore nemo placeat omnis aut eveniet quis."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
                
            </div>
        </div>
    )
}

export default NewsItem;
