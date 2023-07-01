import { Component } from "react";
import css from './Feedback.module.css'

class Feedback extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

    handleGood = (e) => {
        this.setState((prevState) => ({ good: prevState.good + 1 }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    handleNeutral = () => {
        this.setState((prevState) => ({ neutral: prevState.neutral + 1 }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    handleBad = () => {
        this.setState((prevState) => ({ bad: prevState.bad + 1 }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState((prevState) => ({ total: prevState.good + prevState.neutral + prevState.bad }))
    }
    
    countPositiveFeedbackPercentage = () => {
        this.setState((prevState) => ({positive: Math.round((prevState.good/prevState.total)*100)}))
    }

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <div className={css.button__box}>
                <button className={css.feedback__button} onClick={this.handleGood}>Good</button>
                <button className={css.feedback__button} onClick={this.handleNeutral}>Neutral</button>
                <button className={css.feedback__button} onClick={this.handleBad}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: {this.state.total}</p>
                <p>Positive feedback: {this.state.positive > 0 && (<span> {this.state.positive} %</span>)}
                </p>
            </div>
        )
    }
}

export default Feedback