import React from 'react';
import BingoCard from './BingoCard';
import './BingoGame.css';

class BingoGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.getQuestionsOrder(props.data)
    };
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  getQuestionsOrder(questions) {
    let shuffledQuestions = null; //JSON.parse(localStorage.getItem('shuffledQuestions'));

    if (!shuffledQuestions) {
      shuffledQuestions = questions.slice(0);
      this.shuffleArray(shuffledQuestions);
      localStorage.setItem('shuffledQuestions', JSON.stringify(shuffledQuestions))
    }

    return shuffledQuestions.map(shuffledQuestion => {
      return {
        questionType: shuffledQuestion.questionType,
        questionText: shuffledQuestion.questionText,
        person: null,
        reason: null
      }
    });
  }

  handleOnBlur(index, person) {
    console.log('hi ' + index + ' ' + person);

    const questions = this.state.questions.slice(0);
    questions[index].person = person;

    this.setState({
      questions: questions
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  render() {
    return (
      <div className="bingo-game" >
        {
          this.state.questions.map((question, index) => (
            <div className="bingo-game">
              <BingoCard
                index={index}
                questionText={question.questionText}
                guessed={question.person ? true : false}
                onBlur={this.handleOnBlur}
              />
            </div >
          ))
        }
      </div >
    );
  }
}

export default BingoGame;