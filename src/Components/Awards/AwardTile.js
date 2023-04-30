
import "./AwardTile.css"
function AwardTile(props) {
  return (
    <div className="my-card">
      <div className='cards'>
        <div className='content1'>{props.title}</div>
      </div>
    </div>

  );
}

export default AwardTile;
