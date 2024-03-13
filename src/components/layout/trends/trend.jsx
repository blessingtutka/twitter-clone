import TrendItem from "./trend-item" 
import TrendTitle from "./trend-title";
import More from "./more";
export default function Trend() {
    const trendItems = [];
    for (let i = 0; i < 4; i++) {
        trendItems.push(<TrendItem key={i} />);
    }
  return (
    <div className="trend-box trend">
        <TrendTitle />
        { trendItems}
        <More />
    </div>
  )
}
