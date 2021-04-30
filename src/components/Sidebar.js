export default function Sidebar({ data }) {
  return (
    <div>
      <button onClick={data}>close </button>
      <div> Profile Info</div>
      <div> Results</div>
      <div> Messages</div>
      <div> Announceents</div>
    </div>
  );
}
