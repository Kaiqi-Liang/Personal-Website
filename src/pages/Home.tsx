import Background from '../components/Background';
import TextLoop from 'react-text-loop';

const details = {
  first: [
    'Programming',
    'Software Engineering',
    'Global Warming',
  ],
  second: [
    'passion',
    'pursuit',
    'concern',
  ],
};

export default () => {
  return (
    <Background>
      <h1>Hi there, welcome to my website</h1>
      <h2>I'm Kaiqi Liang</h2>
      <h3>
        <TextLoop interval={1500}>
          {details.first}
        </TextLoop>
        {` is my `}
        <TextLoop interval={1500}>
          {details.second}
        </TextLoop>
      </h3>
    </Background>
  );
};
