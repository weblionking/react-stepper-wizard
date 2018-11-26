import React, { Component } from 'react'
import Stepper from './components/Stepper'
import Template1 from './components/templates/Template1'
import Template2 from './components/templates/Template2'
import Template3 from './components/templates/Template3'
class App extends Component {
  constructor() {
    super()
    this.firstStepper = React.createRef()
    //style is optional
    this.stepperStyle = {
      container:{
        paddingTop: 24,          //pixel
        paddingBottom: 24,       //pixel
      },
      shape:{
        size: 100,
        borderWidth: 3,
        borderColor: '#42f6f4',
        borderRadius: '50%',
        backgroundColor: '#96acce'
      },
      line: {
        borderWidth: 4,
        color: '#b2b8c1',
        padding: 10
      }
    }
    this.steps = [
      {
        title: 'one',
        icon: 'string',
        enabled: true
      },
      {
        title: 'two',
        icon: 'string',
        enabled: false
      },
      {
        title: 'three',
        icon: 'string',
        enabled: false
      }
    ]
    this.state = {
      currentStep: 0
    }

    this.changeStepEnabled = this.changeStepEnabled.bind(this)
    this.changeCurrentStep = this.changeCurrentStep.bind(this)

  }


  changeStepEnabled() {
    this.firstStepper.current.changeStepEnabled()
  }


  changeCurrentStep(newCurrentStep) {
    console.log('-------------newCurrentStep-----------------------');
    console.log(newCurrentStep);
    console.log('------------------------------------');
    this.setState({
      currentStep: newCurrentStep
    })
    //this.firstStepper.current.changeCurrentStep()
  }



  renderContent() {
    switch (this.state.currentStep) {
      case 0: return (<Template1 changeStepEnabled={this.changeStepEnabled} />)
      case 1: return (<Template2 changeStepEnabled={this.changeStepEnabled} />)
      case 2: return (<Template3 changeStepEnabled={this.changeStepEnabled} />)
      case 3: return (<div>Template4</div>)

    }
  }



  render() {
    return (
      <div>
        <Stepper
          ref={this.firstStepper}
          style={this.stepperStyle}
          steps={this.steps}
          changeCurrentStep={this.changeCurrentStep}
        />
        {this.renderContent()}
      </div>
    )
  }
}

export default App





// console.log('------------------------------------');
// console.log("hrello");
// console.log('------------------------------------');
// this.setState(prevState =>({
//   steps: prevState.steps.map(
//     obj => (obj.id === stepId ? Object.assign(obj, {enabled: enable}): obj)
//   )
// }))








    // this.state = {
    //   steps: [{
    //     title: 'Step One',
    //     id:0,
    //     href: 'http://example1.com',
    //     enabled: true,
    //     onClick: (e) => {
    //       e.preventDefault()
    //       console.log('onClick', 1)
    //     }
    //   }, {
    //     title: 'Step Two',
    //     href: 'http://example2.com',
    //     id: 1,
    //     enabled: false,
    //     onClick: (e) => {
    //       e.preventDefault()
    //       console.log('onClick', 2)
    //     }
    //   },
    //   {
    //     title: 'Step Three',
    //     href: 'http://example3.com',
    //     id: 2,
    //     enabled: false,
    //     onClick: (e) => {
    //       e.preventDefault()
    //       console.log('onClick', 3)
    //     }
    //   }
    //   ],
    //   currentStep: 0,
    //   style: {
    //     containerPaddingTop: 24,          //pixel
    //     containerPaddingBottom: 24,       //pixel
    //     shapeSize: 100,                   //pixel
    //     shapeBorderWidth: 5,              //pixel
    //     shapeBorderColor: '#4286f4',
    //     shapeBorderRadius: 50,            //percentage
    //     shapeBackgroundColor: '#96acce',
    //     lineWidth: 4,                     //pixel
    //     lineColor: '#b2b8c1',
    //     linePadding: 10
    //   }
    // }
    //this.changeStepEnabled = this.changeStepEnabled.bind(this)