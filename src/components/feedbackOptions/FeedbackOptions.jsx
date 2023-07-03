import { Component } from "react";
import css from './Feedback.module.css'

class FeedbackOptions extends Component {
    handleOption = (e) => {
    const option = e.target.textContent
    this.props.onLeaveFeedback(option)
}
    render() {
        return (
            <ul className={css.optionsList}>
                {this.props.options.map((option, idx) => <li key={idx}><button onClick={this.handleOption} className={css.optionButton}>{option}</button></li>)}
            </ul>
        )
    }
}

export default FeedbackOptions