import Image from "next/image";
import Link from "next/link";
const NewsCard = ({ item }) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="newsCard">
      <Image
        src={item.image[0]}
        alt={item.title}
        width="2000"
        height="2000"
        className="newsCard__image"
      />
      <div className="newsCard__content">
        <h3 className="newsCard__title">{truncate(item.title, 50)}</h3>
        <p className="newsCard__article">{truncate(item.article, 140)}</p>
        <Link href={`/media/${item.id}`} className="newsCard__read">
          <span className="mkdf-btn-text">Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
