import useLanguage from "../hooks/useLanguage";

const TestButton = () => {
  const [key, setLanguage] = useLanguage();

  const onPress = () => {
    setLanguage(key === 'en' ? 'es' : 'en');
  }

  return (
    <button onClick={onPress}>
      switch
    </button>
  );
};

export default TestButton;