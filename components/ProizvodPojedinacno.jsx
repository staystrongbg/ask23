const ProizvodPojedinacno = () => {
  return <h2>proizvod page</h2>;
};

export const getStaticProps = async (context) => {
  return {
    props: {
      page: categoryData.find((p) => p.link === context.params.url),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: categoryData.map((l) => {
      return {
        params: { url: l.link },
      };
    }),
    fallback: false,
  };
};
export default ProizvodPojedinacno;
