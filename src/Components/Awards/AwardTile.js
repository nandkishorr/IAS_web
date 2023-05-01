
import "./AwardTile.css"
function AwardTile(props) {
  return (
    <div className="my-card my-2">
      <div className='cards'>
        <div className='content1'>{props.title}</div>
      </div>
    </div>

  );
}

export default AwardTile;
