import Head from 'next/head';

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <title>A C K 2 3 | Dobrodošli! - {title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  keywords: 'kućni ljubimci, hrana za pse i mačke',
  description: 'Sve za vašeg kućnog ljubimca',
};

export default Meta;
