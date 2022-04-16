import Link from 'next/link';
import { categoryData } from '../kategorijeData';
import {
  cardStyle,
  imgStyle,
  detailsContainer,
  imgWidth,
  headingStyle,
  textStyle,
} from './utils';

const Kategorije = () => {
  return (
    <div className=' flex m-auto flex-wrap justify-center gap-4'>
      {categoryData.map((i) => (
        <Link key={i.id} href={`/${i.link}`}>
          <a>
            <span className={cardStyle(i.background[0], i.background[1])}>
              <div
                className={detailsContainer(
                  i.detailsContainer[0],
                  i.detailsContainer[1]
                )}
              >
                <h3 className={headingStyle(i.textStyle)}>{i.title}</h3>
                <p className={textStyle(i.textStyle)}>{i.text}</p>
              </div>
              <div className={imgWidth(i.imgWidth)}>
                <img src={i.image} className={imgStyle(i.imageStyle)} />
              </div>
            </span>
          </a>
        </Link>
      ))}

      {/* list of categories goes here */}
    </div>
  );
};

export default Kategorije;

// jedan json sa kategorijama i artiklima
