class Lamp extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        hover: false,
        leftLocation: true,
      };
      //alert

      this.toggleLight = this.toggleLight.bind(this);
      this.flipLocation = this.flipLocation.bind(this);
    };

    toggleLight () {
      this.setState({
        hover: !this.state.hover
      })
    }

    flipLocation () {
      console.log(this.state.leftLocation)
      this.setState({
        leftLocation: !this.state.leftLocation,
      })
    }
  
    render () {
      //styles
      const {hover, leftLocation} = this.state;
      const backgroundStyles = {
        height: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        position: 'relative',
        backgroundImage: `url("https://st.depositphotos.com/1000374/2802/i/950/depositphotos_28020609-stock-photo-graphical-sketch-of-an-interior.jpg")`,
        zIndex: -1,
      };
      const lampStyles = {
        height: '100px',
        top: leftLocation ? '216px' : '350px',
        left: leftLocation ? '113px' : '505px',
        position: 'relative',
        zIndex: 2,
      };
      const lightStyles = {
        width: '75px',
        top: leftLocation ? '191px' : '325px',
        left: leftLocation ? '24px' : '420px',
        position: 'relative',
        opacity: hover ? 1 : this.props.lit ? 1 : 0.3,
        transition: '3s',
        transform: hover ? 'rotate(1turn)' : 'none',
        zIndex: 1,
      };

      return (
        <div style={backgroundStyles}>
          <img src={'https://image.flaticon.com/icons/png/512/109/109968.png'} style={lampStyles} alt="lamp" onMouseEnter={this.toggleLight} onMouseLeave={this.toggleLight} onClick={this.flipLocation}/>
          <img src={"https://www.clker.com/cliparts/s/8/X/x/k/m/sun-design-md.png"} style={lightStyles} />
        </div>
      )
    }
}
export default Lamp