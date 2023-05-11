import Sentiment from "sentiment";
import Positive from

Positive.jpg
import Negative from

Negative.jpg
import Neutal from

neutral.jpg

const sentiment = new Sentiment()
const [sentimentScore, setSentimentScore] = useState(null);
useEffect(() => {
	setSentimentScore(sentiment.analyze(phrase));
}, [phrase]);

{
	sentimentScore !== null ?
		<p>sentiment score:{sentimentScore.score}</p>
		: ''
}

{
	sentimentScore ?
		sentimentScore.score === 0 ?
			<img src={neutral.jpg} alt="Neutral"/>
			:
			sentimentScore > 0
			< img src = {Positive.jpg}
	alt = "Positive" / >
:
	<img src={Negative.jpg} alt="Negative"/>
:
	''
}