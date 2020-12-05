import WidgetCardDescription from "./WidgetCardDescription";
import WidgetCardTag from "./WidgetCardTag";
import WidgetCardTitle from "./WidgetCardTitle";

function WidgetCard({ title, description }) {
  const tags = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return <div className="card">
    <WidgetCardTitle>{title}</WidgetCardTitle>
    <WidgetCardDescription>{description}</WidgetCardDescription>
    {tags.map(tag => <WidgetCardTag key={tag}>{tag}</WidgetCardTag>)}
  </div>
}

export default WidgetCard;