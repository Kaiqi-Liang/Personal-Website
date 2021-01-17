import Background from '../components/Background';
import TextLoop from 'react-text-loop';

export default () => {
  return (
    <Background>
      <h1>Hi there, welcome to my website</h1>
      <h2>I'm Kaiqi Liang</h2>
      <h3>
        <TextLoop interval={1500}>
          {[
            'Programming',
            'Software Engineering',
            'Global Warming',
          ]}
        </TextLoop>
        {' is my '}
        <TextLoop interval={1500}>
          {[
            'passion',
            'pursuit',
            'concern',
          ]}
        </TextLoop>
      </h3>
    </Background>
  );
};
