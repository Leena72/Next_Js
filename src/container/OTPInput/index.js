import React, { Component } from "react";
import OtpInput from "react-otp-input";
export class OTPInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      isError: false,
      minutes: 0,
      seconds: 25,
    };
  }
  handleChange = (otp) => {
    this.state.isError && this.setState({ isError: false });
    this.setState({ otp });
    this.props.getOTP(otp);
  };
  componentDidMount() {
    if (this.props.triggerTimer || true) {
      this.timmer();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.triggerTimer !== nextProps.triggerTimer &&
      nextProps.triggerTimer
    ) {
      this.timmer();
    }
  }
  9;

  onResend = () => {
    this.setState(
      {
        minutes: 0,
        seconds: 25,
      },
      () => {
        this.timmer();
        if (this.props.resendFunc) {
          this.setState({
            otp: "",
          });
          this.props.resendFunc();
        }
      }
    );
  };

  timmer = () => {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  };

  componentDidUpdate() {
    if (this.props.otp !== this.state.otp) {
      this.setState({
        otp: this.props.otp,
      });
    }
  }

  keyDown = e => {
    if(e.key === "Enter" && this.state.otp.length === 6) {
      this.props.otpKeyDownFunc()
    }
  }

  render() {
    const { isError } = this.state;
    return (
        <div className="header-otp-popup-content">
        <div className="row pt-2">
        <div className="col-md-4 col-4">
        <div className="enter-otp-popup">
            <h2> Enter OTP </h2>
          </div>
         </div> 
          {this.state.minutes === 0 && this.state.seconds === 0 ? (
            <div className="col-md-8 col-8">
            <div className="resend-otp-popup d-flex justify-content-end" onClick={() => this.onResend()}>
              {/* <img src={resend} alt="resend" className="resend-img" />{" "} */}
              <h2>Resend OTP</h2>
            </div>
            </div>
            
          ) : (
            <div className="col-md-8 col-8">
            <div className="resend-otp-popup d-flex justify-content-end">
              {/* <img src={clock} alt="clock" className="resend-img" />{" "} */}
              <h2> You can resend OTP in
                {" " + this.state.minutes}:
                {this.state.seconds < 10
                  ? `0${this.state.seconds}`
                  : this.state.seconds}
              </h2>
            </div>
            </div>
          )}
      
        </div>
        {/* <div className="row">
            <div className="col-md-12 pt-3 pb-3"> */}
                <div className="otp-input-wrapper" onKeyDown={(e) => this.keyDown(e)}>
                    <OtpInput
                        value={this.state.otp}
                        onChange={this.handleChange}
                        numInputs={6}
                        inputStyle="otp-field"
                        hasErrored={isError}
                        errorStyle={isError && "error"}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        renderInput={(props) => <input {...props} />}
                    />
               </div>
            {/* </div>
        </div> */}
      </div>
    );
  }
}

export default OTPInput;
