import Link from "next/link";
import Image from "next/image";
import { Calendar, Book } from "lucide-react";

interface NewsCardProps {
  index: number;
  bg: string;
  slug: string;
  title: string;
  category: string | undefined;
  posted_on: string;
  read_time?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ index, bg, slug, title, category="General", posted_on, read_time }) => {
  return (
    <a href={slug}>
      <article className="relative w-full h-96 rounded-xl shadow mx-auto cursor-pointer group">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full">
            <Image
              priority={index < 4}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-xl"
              src={bg}
              alt="Card Image"
            />
            <div className="absolute inset-0 bg-black opacity-60 rounded-xl" />
          </div>

          <div className="absolute inset-0 top-0 start-0 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="font-semibold">
              {category?.toUpperCase()}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex gap-4 text-xs mt-1">
              <p className="flex">
                <Calendar className="me-1" color="white" size={16} />
                <span>{posted_on}</span>
              </p>
              <p className="flex">
                <Book className="me-1" color="white" size={16} />
                <span>{read_time}</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </a>
  )
}

export default NewsCard;
