function HogDetails({ hog }) {
  return (
    <div>
      <div>{hog.specialty}</div>
      <div>{hog.greased ? "is greased" : "Is not greased"}</div>
      <div>{hog.weight}</div>
      <div>{hog["highest medal achieved"]}</div>
    </div>
  );
}

export default HogDetails;
