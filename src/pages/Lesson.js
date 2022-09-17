import "./LessonStyles.css";

export default function Lesson() {
  return (
    <div className="conversation">
      <h1>
        What is your name?
        <br />
        你叫什么名字？
      </h1>
      <div className="personA">
        <p>你好。</p>
        <p className="pinYin">Nǐ hǎo.</p>
        <p className="eng">Hello.</p>
      </div>
      <div className="personB">
        <p>您好。</p>
        <p className="pinYin">Nínhǎo.</p>
        <p className="eng">Hello.</p>
      </div>
      <div className="personA">
        <p>你叫什么名字？</p>
        <p className="pinYin">Nǐ jìao shénme míngzi?</p>
        <p className="eng">What is your name?</p>
      </div>
      <div className="personB">
        <p>我叫朱虹。你叫什么名字？</p>
        <p className="pinYin">Wǒ jìao Zhū Hóng. Nǐ jìao shénme míngzi?</p>
        <p className="eng">I’m called Zhu Hong. What is your name?</p>
      </div>
      <div className="personA">
        <p>我叫刘明。</p>
        <p className="pinYin">Wǒ jìao Líu Míng.</p>
        <p className="eng">I’m called Liu Ming.</p>
      </div>
    </div>
  );
}
