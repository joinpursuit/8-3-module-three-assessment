function ExpandLocInfo({ name, climate, terrain, showMore }) {
  if (showMore === true) {
    return (
      <div className='expandLocation'>
        <p>Button Clicked, Locations Expanded</p>
      </div>
    );
  }
}
