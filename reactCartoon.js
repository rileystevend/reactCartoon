//reactCartoon coding challenge

class Lamp extends React.Component {

  
    render () {

      return (
        <div style={backgroundStyles}>
          <img src={'https://image.flaticon.com/icons/png/512/109/109968.png'} style={lampStyles} alt="lamp" onMouseEnter={this.toggleLight} onMouseLeave={this.toggleLight} onClick={this.flipLocation}/>
          <img src={"https://www.clker.com/cliparts/s/8/X/x/k/m/sun-design-md.png"} style={lightStyles} />
        </div>
      )
    }
}
export default Lamp