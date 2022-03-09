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
  console.log(categoryData);
  return (
    <div className='xl:w-1/2 w-full flex flex-wrap justify-center gap-4'>
      {categoryData.map((i) => (
        <Link key={i.id} href={i.link}>
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

      {/* <Link href='/moj_ljubimac/psi'>
        <a>
          <span className={cardStyle('bg-red-400', 'bg-left-bottom')}>
            <div className={detailsContainer('left-2 top-4', 'text-left')}>
              <h3 className={headingStyle('text-red-900')}>пси</h3>
              <p className={textStyle('text-red-900')}>
                Povodci,hrana,igracke, suplementi...
              </p>
            </div>
            <div className={imgWidth('w-full')}>
              <img src='/animals/kucov.png' className={imgStyle('-right-16')} />
            </div>
          </span>
        </a>
      </Link>
      <Link href='/moj_ljubimac/mace'>
        <a>
          <span className={cardStyle('bg-yellow-400')}>
            <div className={detailsContainer('right-2 top-10', 'text-right')}>
              <h3 className={headingStyle('text-yellow-900')}>мачке</h3>
              <p className={textStyle('text-yellow-900')}>
                hrana, igracke, suplementi,grebalice...
              </p>
            </div>
            <div className={imgWidth('w-full')}>
              <img src='/animals/macka.png' className={imgStyle('-left-16')} />
            </div>
          </span>
        </a>
      </Link>
      <Link href='/moj_ljubimac/ptice'>
        <a>
          <span className={cardStyle('bg-blue-300', 'bg-right-bottom')}>
            <div className={detailsContainer('right-2 top-2', 'text-right')}>
              <h3 className={headingStyle('text-blue-800')}>птице</h3>
              <p className={textStyle('text-blue-800')}>
                hrana,kavezi,sudovi...
              </p>
            </div>
            <div className={imgWidth('w-full')}>
              <img
                src='/animals/pticica.png'
                className={imgStyle('-left-20')}
              />
            </div>
          </span>
        </a>
      </Link>
      <Link href='/moj_ljubimac/ribice'>
        <a>
          <span className={cardStyle('bg-blue-400', 'bg-left-bottom')}>
            <div className={detailsContainer('left-2 top-2')}>
              <h3 className={headingStyle('text-blue-900')}>акваристика</h3>
              <p className={textStyle('text-blue-900')}>
                akvarijumi, pumpe, hrana...
              </p>
            </div>
            <div className={imgWidth('w-full')}>
              <img
                src='/animals/ribica.png'
                className={imgStyle('-right-20')}
              />
            </div>
          </span>
        </a>
      </Link>
      <Link href='/moj_ljubimac/glodari'>
        <a>
          <span className={cardStyle('bg-green-400', 'bg-right-bottom')}>
            <div className={detailsContainer('right-2 top-2', 'text-right')}>
              <h3 className={headingStyle('text-green-900')}>мале животиње</h3>
              <p className={textStyle('text-green-900')}>
                hrana, sudovi, akvarijumi, kavezi...
              </p>
            </div>
            <div className={imgWidth('w-1/2')}>
              <img
                src='/animals/zec.png'
                className={imgStyle('-left-10')}
                alt=''
              />
            </div>
          </span>
        </a>
      </Link> */}

      {/* list of categories goes here */}
    </div>
  );
};

export default Kategorije;

// jedan json sa kategorijama i artiklima
