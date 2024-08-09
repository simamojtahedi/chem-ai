const Loading = () => {
  const domain = process.env.REACT_APP_DOMAIN;

  return (
    <div className="w-full flex justify-center">
      <img
        src={`${domain}assets/images/loading.gif`}
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
