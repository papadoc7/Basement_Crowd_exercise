import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as questions1 from '../../data/4,5,6,7,8,11,12,15,16,17.json';
import * as questions2 from '../../data/44,45,46.json';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: '17px',
    padding: '20px',
    fontWeight: 'bold',
    border: 'double',
    backgroundColor: 'aliceblue',
  }
});

class Section extends Component {

/**
 * 
 * @param {*} parentId 
 * @param {*} classes 
 * @param {*} statesArray 
 * @returns Question under the correct section
 */
  renderQuestions(parentId, classes, statesArray) {
    const questions = questions2.concat(questions1);

    return questions.filter(({ sectionId }) => sectionId === parentId).map(question => (
      <Question
        key={question.qa_id}
        question={question}
        classes={classes}
        statesArray={statesArray}
      />
    ))
  }

  render () {

    const { classes, section, statesArray } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} component="h2">
              { section.title.toUpperCase() }
            </Typography>
            { this.renderQuestions(section.id, classes, statesArray) } 
          </CardContent>
        </Card>
        <br /><br />
      </React.Fragment>
    )
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);