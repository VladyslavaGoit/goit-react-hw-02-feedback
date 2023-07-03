import { Component } from "react";

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props
        return (
            <ul>
                <li><p>Good: {good}</p></li>
                <li><p>Neutral: {neutral}</p></li>
                <li><p>Bad: {bad}</p></li>
                <li><p>Total: {total}</p></li>
                <li><p>Positive feedback: {positivePercentage>0 && (<span>{positivePercentage}%</span>)}</p></li>
            </ul>
        )
    }
}
export default Statistics