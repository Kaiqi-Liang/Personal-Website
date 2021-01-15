import styled from 'styled-components';
import Background from '../components/Background';

const Paragraph = styled.p({
  fontSize: '1.25em',
});

export default () => {
  return (
    <Background>
      <Paragraph>
        I am a <strong>Computer Science</strong> student at University of New South Wales (<strong>UNSW</strong>) and an <strong>Academic Tutor</strong> for several computing courses. Apart from that I am also an <strong>Environmentalist</strong>.
      </Paragraph>
      <Paragraph>
        I am the kind of person who always aims for perfection, even though most of the time it is unachievable, what matters the most is at end the end of the day I can tell myself that I tried my best and I have achieved the <strong>excellence</strong>.
      </Paragraph>
      <Paragraph>
        More about me coming up soon!
      </Paragraph>
    </Background>
  );
};
