import React, { Component } from 'react';
import Question from './components/Question';
import Section from './components/Section';
import * as sections from '../data/sections.json';
import * as questions2 from '../data/44,45,46.json';
import * as states from '../data/states.json';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          vArr: [],
      };
  }

  componentDidMount() {
    let statesArray = [];

    /**
     * Creation of array(statesArray) in which will exist
     * the question that should be expanded in the beginning
     * according to its' state
     */
    //Array.isArray was added to be able to run test otherwise we will get error
    //re .map that it's not a function and with that addition we ensure that states is an array
    //Array.isArray(states) && 
    states.map(state => {
      statesArray = statesArray.concat(state.expanded);
    })
    
    this.setState({
      vArr: statesArray
    })
  }

  /**
   * @param parentId 
   * @return Question component 
   */
  renderQuestions2(parentId) {
    return questions2.filter(({ sectionId }) => sectionId === parentId).map(question => (
      <Question key={question.qa_id} question={question}/>
    ))
  }

  render() {

    if(this.state.vArr.length < 1)
      return 'Loading';

    return (
      <React.Fragment>
        { 
          sections.default.map(
            section => (
              <Section key={section.id} section={section} statesArray={this.state.vArr} />
            )
          )
        }
      </React.Fragment>
    )
  }
}

export default App;