import styled from "styled-components";
import Form from "../images/form.png"
import { COLORS, FONT_SIZE } from "../style_constants";

const HomeWrapper = styled.div`
  text-align: center;
  margin: 70px 32px;
`;

const HomeTextWrapper = styled.div`
  border: 1px solid ${COLORS.BORDER};
`;

const HomeImegeWrapper = styled.div`
  display: flex;
  text-align: left;
`;

const TextWrapper = styled.div`
  margin: auto 0;
`;

const HomeText = styled.p`
  font-size: ${FONT_SIZE.BODY1};
  margin: 30px 0;
`;

const FormImage = styled.img`
  height: 300px;
  width: 700px;
`;

const ImageText = styled.p`
  color: ${COLORS.MAIN};
`;

export const Home = () => {
  return(
    <HomeWrapper>
      <HomeTextWrapper>
        <h1>新習慣記録とは。。。</h1>
        <HomeText>あなたが習慣化させたい事柄を登録し、その達成回数を記録していくものです。</HomeText>
        <HomeText>習慣とは、習慣が変われば人生が変わるとも言われる程大切なものです。</HomeText>
        <HomeText>しかし、新しい習慣を定着させることは非常に難しく三日坊主になりやすいです。</HomeText>
        <HomeText>定着が難しい習慣化もこの新習慣記録で見える化することで達成感が感じられ続けやすくなります。</HomeText>
        <HomeText>ぜひ、試してみてください！！</HomeText>
      </HomeTextWrapper>
      <HomeImegeWrapper>
        <div>
          <h1>使い方</h1>
          <FormImage src={Form} />
        </div>
        <TextWrapper>
          <ImageText>※</ImageText>
          <HomeText>習慣とその内容を登録します。</HomeText>
          <HomeText>その後は登録した新習慣を実施できたら、できたボタンを押して回数を増やしていきます！</HomeText>
        </TextWrapper>
      </HomeImegeWrapper>
    </HomeWrapper>
  );
};
