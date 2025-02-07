import { FaRegStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card w-full  bg-base-100 shadow-xl rounded-lg p-4 mt-3">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-sm font-semibold">{news.author.name}</h3>
          <p className="text-xs text-gray-500">{news.author.published_date}</p>
        </div>
        <FaShareAlt className="ml-auto text-gray-500 cursor-pointer" />
      </div>
      <figure>
        <img
          src={news.thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-auto object-cover rounded-lg"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="text-lg font-bold leading-tight">{news.title}</h2>
        <p className="text-sm text-gray-600 mt-1">
          {news.details.substring(0, 150)}...
        </p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center text-yellow-500 gap-1">
            <FaRegStar />
            <span className="font-semibold">{news.rating.number}</span>
          </div>
          <span className="text-gray-500 text-sm">👁️ {news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
